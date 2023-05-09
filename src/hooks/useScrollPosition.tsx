import { useEffect } from 'react';

function useScrollTo(targetPosition:number , conditional:boolean) {
  useEffect(() => {
    if(!conditional) return;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, [targetPosition , conditional]);
}

export default useScrollTo;