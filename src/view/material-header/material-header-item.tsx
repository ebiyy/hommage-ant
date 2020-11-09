import { ATOM_BRIDGE } from '@/recoil/atom-bridge';
import React from 'react';
import { useRecoilState } from 'recoil';
import './material-header.scss';

type Props = {
  materialName: string;
};

const MaterialHeaderItem: React.FC<Props> = props => {
  const [descriptionData] = useRecoilState(
    ATOM_BRIDGE[props.materialName.toLocaleLowerCase()],
  );

  return (
    <>
      <div>{descriptionData.possessionNumber}</div>
      <div>{descriptionData.possessionNumberPerSec}</div>
    </>
  );
};

export default MaterialHeaderItem;
