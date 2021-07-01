import React from "react";
import PropTypes from "prop-types";
import './styles.scss'
AlbumItem.propTypes = {
  albumItem: PropTypes.object.isRequired,
};

function AlbumItem({ albumItem }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        I<img src={albumItem.thumbnailUrl} alt={albumItem.name} />
      </div>
      <p className="album__name">{albumItem.name}</p>
    </div>
  );
}

export default AlbumItem;
