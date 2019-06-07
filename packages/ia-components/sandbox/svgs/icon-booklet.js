import React from 'react';

export default (props) => {
  const { title = 'Booklet' } = props;
  return (
    <figure {...props}>
      <svg
        height="20"
        viewBox="0 0 16 11"
        width="22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{ title }</title>
        <path
          d="m7.49999992 1.83333333.00000008 9.16666667c-.50000008-.4583333-1.50000006-1.375-3.75000004-1.375-1.04912478-.00508972-2.09254975.14166432-3.09174996.4348438-.1524966.0466407-.32015675.0232227-.45057888-.06293493-.13042213-.08615761-.20769643-.22454469-.20767111-.37190887v-8.25c-.00002356-.12795338.0583032-.25009062.16087499-.336875.69975-.59170833 2.24262498-1.038125 3.58912496-1.038125 1.84299998 0 2.91424997.9185 3.48999996 1.41178125l.099125.08479167c.10253983.08675734.16086366.2088469.160875.33676041zm.99999999 0v9.16666667c.49999999-.4583333 1.49999998-1.375 3.74999999-1.375 1.0491247-.00508972 2.0925497.14166432 3.0917499.4348438.1525012.0467501.3202267.0233775.4506829-.06280263.1304563-.08618016.2077042-.22463847.2075671-.37204117v-8.25c.0000236-.12795338-.0583032-.25009062-.160875-.336875-.69975-.59159375-2.2425-1.038125-3.5891249-1.038125-1.84275 0-2.914375.9185-3.49 1.41178125-.034625.02979167-.067375.05797917-.099125.08479167-.10253983.08675734-.16086366.2088469-.16087499.33676041z"
          fill="#fff"
        />
      </svg>
    </figure>
  );
};