type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare<T extends Pick<AllType, keyof AllType>>(
    top: Pick<T, 'name' | 'color'>,
    bottom: Pick<T, 'position' | 'weight'>
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }

  console.log(compare);