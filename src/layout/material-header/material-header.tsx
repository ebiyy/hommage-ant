import React from 'react';
import './material-header.scss';

const MATERIAL_DATA = [
  {
    materialName: 'Food',
    possessionNumber: '20Qa',
    possessionNumberPerSec: '923B/s',
  },
  {
    materialName: 'Crystal',
    possessionNumber: '50.7M',
    possessionNumberPerSec: '989/s',
  },
  {
    materialName: 'Soil',
    possessionNumber: '380M',
    possessionNumberPerSec: '6.341/s',
  },
  {
    materialName: 'Science',
    possessionNumber: '196M',
    possessionNumberPerSec: '2.714/s',
  },
  {
    materialName: 'Fungus',
    possessionNumber: '12.1M',
    possessionNumberPerSec: '233/s',
  },
  {
    materialName: 'Wood',
    possessionNumber: '12.7M',
    possessionNumberPerSec: '197/s',
  },
];

const MaterialHeader: React.FC = () => {
  return (
    <div className="material-header">
      {MATERIAL_DATA.map((data, index) => (
        <div className="material-item" key={index}>
          <div>{data.materialName}</div>
          <div className="material-item-value">
            <div>{data.possessionNumber}</div>
            <div>{data.possessionNumberPerSec}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialHeader;
