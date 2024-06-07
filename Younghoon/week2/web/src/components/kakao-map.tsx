import { useEffect } from 'react';

export function KakaoMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 현재 위치 핀 표시
        const displayCurrentLocation = (
          latitude: number,
          longitude: number,
        ) => {
          const locPosition = new window.kakao.maps.LatLng(latitude, longitude);
          // const marker = new window.kakao.maps.Marker({
          //   map: map,
          //   position: locPosition,
          // });
          map.setCenter(locPosition);
        };

        // React Native에서 위치 정보를 받아 현재 위치 핀을 표시
        window.addEventListener('message', (event) => {
          const message = JSON.parse(event.data);
          if (message.type === 'location') {
            displayCurrentLocation(message.latitude, message.longitude);
          }
        });

        // 예시로 React Native로 메시지 보내기
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: 'mapLoaded' }),
          );
        }
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
}
