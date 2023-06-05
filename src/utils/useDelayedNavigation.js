import { useNavigate } from "react-router";

const useDelayedNavigation = () => {
  const navigate = useNavigate();

  const navigateWithDelay = (location, delay) => {
    setTimeout(() => {
      navigate(location);
    }, delay);
  };

  return navigateWithDelay;
};

export default useDelayedNavigation