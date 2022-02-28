import { Icon } from '@iconify/react';

const LeftArrow = ({ currentSlide, slideCount, ...props }) => (
  <Icon {...props} icon="bi:arrow-left-square-fill" color="black" />
);

const RightArrow = ({ currentSlide, slideCount, ...props }) => (
  <Icon {...props} icon="bi:arrow-right-square-fill" color="black" />
);

export const configuracion = {
  dots: true,
  infinite: true,
  speed: 800,
  accesibility: true,
  slidesToShow: 4,

  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
  responsive: [
    {
      breakpoint: 1404,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
