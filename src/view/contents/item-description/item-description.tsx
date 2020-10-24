import React, { useEffect, useState } from 'react';
import ProduceDescription from './produce-discription';

import './item-description.scss';

interface mock {
  materialName: string;
  possessionNumber: string;
  possessionNumberPerSec: string;
  description: string;
}

const MOCKS = [
  {
    materialName: 'Food',
    possessionNumber: '20Qa',
    possessionNumberPerSec: '923B/s',
    description: 'Food is used to support almost all your units.',
  },
  {
    materialName: 'Crystal',
    possessionNumber: '50.7M',
    possessionNumberPerSec: '989/s',
    description: 'Crystals are needed to get science.',
  },
  {
    materialName: 'Soil',
    possessionNumber: '380M',
    possessionNumberPerSec: '6.341/s',
    description: 'Soil is used to make nests.',
  },
  {
    materialName: 'Science',
    possessionNumber: '196M',
    possessionNumberPerSec: '2.714/s',
    description: 'Science is used to improve and unlock stuff.',
  },
  {
    materialName: 'Fungus',
    possessionNumber: '12.1M',
    possessionNumberPerSec: '233/s',
    description: '',
  },
  {
    materialName: 'Wood',
    possessionNumber: '12.7M',
    possessionNumberPerSec: '197/s',
    description: 'Wood is used to make better nests and machinery.',
  },
];

type Props = {
  materialName: string;
};

const ItemDescription: React.FC<Props> = props => {
  const [descriptionData, setDescriptionData] = useState<mock>();

  useEffect(() => {
    console.log(props.materialName);
    setDescriptionData(
      MOCKS.filter(data => props.materialName === data.materialName)[0],
    );
  }, [props.materialName]);

  return (
    <>
      {descriptionData ? (
        <div>
          <div className="discription-title">
            <div>{descriptionData.materialName}</div>
            <div>{descriptionData.possessionNumber}</div>
          </div>
          {descriptionData.materialName === 'Fungus' ? (
            <ProduceDescription />
          ) : (
            <p>{descriptionData.description}</p>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ItemDescription;
