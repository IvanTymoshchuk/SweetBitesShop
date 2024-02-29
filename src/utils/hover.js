const hovers = {
  '&:after': {
    content: "''",
    width: '0%',
    height: '5%',
    background: '#ffffff',
    position: 'absolute',
    left: '0px',
    bottom: '-0.1rem',
    transition: 'width 0.3s ease 0s',
  },
  '&:hover::after, &:focus::after': {
    width: '100%',
  },
};

export default hovers;
