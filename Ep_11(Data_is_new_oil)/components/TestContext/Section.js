// import { LevelContext } from './LevelContext.js';

// export default function Section({ level, children }) {
//     // Since context lets you read information from a component above, each Section 
//     // could read the level from the Section above, and pass level + 1 down automatically. 
//     // Here is how you could do it:
//     // const level = useContext(LevelContext);
//     console.log(level,children)
//   return (
//     <section className="section">
//       <LevelContext.Provider value={level}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

