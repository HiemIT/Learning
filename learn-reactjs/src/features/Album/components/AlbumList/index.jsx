import PropTypes from 'prop-types';
import React from 'react';
import AlbumItem from '../AlbumItem/index';
import '../AlbumList/styles.scss'

AlbumList.propTypes = {
    albumlist : PropTypes.array.isRequired
};
AlbumList.defaultProps = {
    albumlist : []
}
function AlbumList({albumlist}) {
    return (
        <ul className="album-list">
            {albumlist.map(album => (
                <li key={album.id}>
                    <AlbumItem albumItem={album}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;