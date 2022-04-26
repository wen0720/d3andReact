import villageOnly from '../../json/villages-only.json';
import townOnly from '../../json/towns-only.json';
import countyOnly from '../../json/counties-only.json';
import { useState } from 'react';
import { feature } from 'topojson';

export const useData = () => {
  const { villages } = villageOnly.objects;
  const { towns } = townOnly.objects;
  const { counties } = countyOnly.objects;

  const featureVillages = feature(villageOnly, villages);
  const featureTowns = feature(townOnly, towns);
  const featureCounties = feature(countyOnly, counties);

  const [data, setData] = useState({
    villages: featureVillages,
    towns: featureTowns,
    counties: featureCounties,
  });

  const townVillageIdmap = featureTowns.features.reduce((accu, townFeature) => {
    const { TOWNID } = townFeature.properties;
    if (!accu[TOWNID]) {
      accu[TOWNID] = { village: [] };
      accu[TOWNID].data = { ...townFeature };
    }
    const villageInTown = featureVillages.features
      .filter((villageGeometry) => villageGeometry.properties.TOWNID === TOWNID)
      .map((villageGeometry) => ({ ...villageGeometry }));
    accu[TOWNID].village = accu[TOWNID].village.concat(villageInTown);
    return accu;
  }, {});

  const countyTownIdmap = featureCounties.features.reduce((accu, countyFeature) => {
    const { COUNTYID } = countyFeature.properties;
    if (!accu[COUNTYID]) {
      accu[COUNTYID] = {};
    }
    const townInCounty = Object.keys(townVillageIdmap)
      .filter((townId) => townId.slice(0, 1).toLowerCase() === COUNTYID.toLowerCase())
      .map((townId) => townVillageIdmap[townId]);
    townInCounty.forEach(({ data }, idx) => {
      accu[COUNTYID][data.properties.TOWNID] = townInCounty[idx];
    });
    accu[COUNTYID].town = townInCounty.map(({ data }) => data);
    return accu;
  }, {});

  return { data, countyToVillageMap: countyTownIdmap };
};