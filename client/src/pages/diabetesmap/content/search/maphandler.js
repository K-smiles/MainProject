// MapHandler.js
import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

import olderIcon from 'assets/images/locationicon.png'; // location
import hospitalIcon from 'assets/images/hospital.png'; // hospital 

const MapHandler = ({ currentPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !currentPosition) return;

    // 定义地图样式
    const mapStyles = [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }]  // 隐藏商业信息
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]  // 隐藏所有兴趣点图标
      }
    ];

    // 设置地图样式
    map.setOptions({
      styles: mapStyles,
      zoom: 12,
      center: currentPosition
    });

    const userMarker = new window.google.maps.Marker({
      position: currentPosition,
      map: map,
      title: 'YOUR LOCATION',
      icon: {
        url: olderIcon,
        scaledSize: new google.maps.Size(80, 80),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(40, 40),
      },
    });

    const placesService = new window.google.maps.places.PlacesService(map);
    const keywords = ['general practitioner', 'clinic', 'doctor', 'primary care', 'medical centre'];
    let allResults = [];

    // 对每个关键词执行搜索
    keywords.forEach((keyword, index, array) => {
      const request = {
        location: currentPosition,
        radius: 5000,
        type: ['doctor'],
        keyword: keyword,
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          allResults = allResults.concat(results);
        }

        // 检查是否是最后一个关键词的搜索完成
        if (index === array.length - 1) {
          // 处理并使用前10个结果
          allResults = allResults.slice(0, 10); // 只取前10个结果

          const newMarkers = [userMarker];
          const newInfoWindows = [];

          allResults.forEach(place => {
            const placeMarker = new window.google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name,
              icon: {
                url: hospitalIcon,
                scaledSize: new google.maps.Size(80, 80),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(40, 40),
              },
            });

            // 获取详细信息并创建信息窗口
            placesService.getDetails({ placeId: place.place_id }, (placeDetails, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const infoWindow = new window.google.maps.InfoWindow({
                  content: `<div style="font-size: 20px;">
          <strong><p>NAME:</p>${placeDetails.name}</strong><br><br>
          <p>ADDRESS:</p>${placeDetails.formatted_address}<br><br>
          <p>PHONE_NUM:</p>${placeDetails.international_phone_number || 'Phone number not available'}
        </div>`
                });

                // 添加鼠标悬停事件监听器来显示信息窗口
                placeMarker.addListener('mouseover', () => {
                  infoWindow.open(map, placeMarker);
                });

                // 添加鼠标移出事件监听器来关闭信息窗口
                placeMarker.addListener('mouseout', () => {
                  infoWindow.close();
                });

                newInfoWindows.push(infoWindow);
              }
            });

            newMarkers.push(placeMarker);
          });
        }
      });
    });
  }, [currentPosition, map]);

  return null;
};

export default MapHandler;
