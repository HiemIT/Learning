import React from 'react';
import AlbumList from './components/AlbumList/index';
index.propTypes = {
    
};

function index(props) {
    const albumlist = [{
        id : 1 ,
        name : 'Nhac Hoa Thinh Hanh',
        thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/a/9/5/aa95fc162da6608382940bb680550bee.jpg'
    },
    {
        id : 2 ,
        name : 'Chill cung Rap Viet',
        thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/2/f/5/82f55da7d8e87167d6edcf66013455aa.jpg'
    },
    {
        id : 3 ,
        name : '100 EDM',
        thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg'

    }
]
    return (
        <>
            <h2>Co the ban ban se thich nghe day</h2>
            <AlbumList albumlist={albumlist}/>    
        </>
    );
}

export default index;