import villageData10t from 'taiwan-atlas/villages-10t.json';
import { useState } from 'react';
import { feature } from 'topojson';

export const useData = () => {
  const { nation, counties, towns, villages } = villageData10t.objects;
  const featureNation = feature(villageData10t, nation);
  const featureCounties = feature(villageData10t, counties);
  const featureTowns = feature(villageData10t, towns);
  const featureVillages = feature(villageData10t, villages);
  const [data, setData] = useState({
    nation: featureNation,
    counties: featureCounties,
    towns: featureTowns,
    villages: featureVillages,
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

export const useCountyToVillageMap = () => {
  const { counties, towns, villages } = villageData10t.objects;
  const townVillageIdmap = towns.geometries.reduce((accu, townGeometry) => {
    const { TOWNID } = townGeometry.properties;
    if (!accu[TOWNID]) {
      accu[TOWNID] = { village: [] };
      accu[TOWNID].data = { ...townGeometry };
    }
    const villageInTown = villages.geometries
      .filter((villageGeometry) => villageGeometry.properties.TOWNID === TOWNID)
      .map((villageGeometry) => ({ ...villageGeometry }));
    accu[TOWNID].village = accu[TOWNID].village.concat(villageInTown);
    return accu;
  }, {});
  const countyTownIdmap = counties.geometries.reduce((accu, countyGeometry) => {
    const { COUNTYID } = countyGeometry.properties;
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
  return countyTownIdmap;
}