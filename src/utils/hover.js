const hovers = {
  transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover, &:focus': {
    color: 'rgba(121, 163, 93, 1)',
    transition: 'color 0.75s, transform 0.75s',
    transform: 'scale(1.1)',
  },
};

export default hovers;