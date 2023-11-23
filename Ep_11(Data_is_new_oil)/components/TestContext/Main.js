import Heading from './Heading.js';
import Section from './Section.js';

// export default function Main() {
//   return (
//     // The component will use the value of the nearest <LevelContext.Provider> in the UI tree above it.
//     // Here we are passing level as a props but in section we are setting that
//     // level value to context
//     <Section level={1}>  
//         {/* Till now level in context has value as 1 so child below it will use that level(1) */}
//       <Heading>Title</Heading>
//       <Section level={2}>
//         {/* Till now level in context has value as 2 so child below it will use that level(2) */}
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section level={3}>
//         {/* Till now level in context has value as 3 so child below it will use that level(3) */}
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section level={4}>
//             {/* Till now level in context has value as 4 so child below it will use that level(4) */}
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

export default Main = () =>{
   
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}

