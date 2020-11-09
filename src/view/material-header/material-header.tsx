import { MATERIAL_ITEM_LIST } from '@/helpers/constants/increment-item-list';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MaterialHeaderItem from './material-header-item';
import './material-header.scss';

export interface MaterialData {
  materialName: string;
  possessionNumber: string;
  possessionNumberPerSec: string;
}

const MaterialHeader: React.FC = () => {
  return (
    <div className="material-header">
      {Object.keys(MATERIAL_ITEM_LIST).map((itemKey: any, index) => (
        <Fragment key={index}>
          {MATERIAL_ITEM_LIST[itemKey].defaultQuantity !== undefined ? (
            <Link
              to={`/${MATERIAL_ITEM_LIST[itemKey].link}`}
              className="material-item"
              key={index}
            >
              <div>{MATERIAL_ITEM_LIST[itemKey].displayName}</div>
              <div className="material-item-value">
                <MaterialHeaderItem
                  materialName={MATERIAL_ITEM_LIST[itemKey].displayName}
                />
              </div>
            </Link>
          ) : (
            <Link to="/" key={index} className="material-item blank"></Link>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default MaterialHeader;
