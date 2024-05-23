import React from 'react';
import {Svg, Path} from 'react-native-svg';
import color from '../../styles/color';

const HomeIcon = ({focused}: {focused: boolean}) => {
  const iconColor = focused ? color.orange : color.darkGray;
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.954 20H5C4.71933 20 4.48267 19.9033 4.29 19.71C4.09667 19.518 4 19.2813 4 19V15.046C4.56933 14.8793 5.045 14.5643 5.427 14.101C5.809 13.6377 6 13.104 6 12.5C6 11.896 5.809 11.3623 5.427 10.899C5.045 10.4357 4.56933 10.1207 4 9.95401V6.00001C4 5.71934 4.09667 5.48267 4.29 5.29001C4.482 5.09667 4.71867 5.00001 5 5.00001H9C9.18 4.42801 9.49533 3.97101 9.946 3.62901C10.3973 3.28634 10.9153 3.11501 11.5 3.11501C12.0847 3.11501 12.6027 3.28634 13.054 3.62901C13.5047 3.97101 13.82 4.42801 14 5.00001H18C18.2807 5.00001 18.5173 5.09667 18.71 5.29001C18.9033 5.48267 19 5.71934 19 6.00001V10C19.572 10.18 20.029 10.4953 20.371 10.946C20.7137 11.3973 20.885 11.9153 20.885 12.5C20.885 13.0847 20.7137 13.6027 20.371 14.054C20.029 14.5047 19.572 14.82 19 15V19C19 19.2807 18.9033 19.5173 18.71 19.71C18.5173 19.9033 18.2807 20 18 20H14.046C13.866 19.3973 13.5427 18.9133 13.076 18.548C12.6087 18.1827 12.0833 18 11.5 18C10.9167 18 10.3913 18.1827 9.924 18.548C9.45733 18.9133 9.134 19.3973 8.954 20Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default HomeIcon;
