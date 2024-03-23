import { CoursePart } from '../types';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`,
  );
};

function Part({ part }: { part: CoursePart }) {
  switch (part.kind) {
    case 'basic':
      return (
        <p>
          <b>
            {part.name} {part.exerciseCount}
          </b>
          <br /> <i>{part.description}</i>
        </p>
      );
    case 'background':
      return (
        <p>
          <b>
            {part.name} {part.exerciseCount}
          </b>
          <br /> <i>{part.description}</i>
          <br />
          submit to {part.backgroundMaterial}
        </p>
      );
    case 'group':
      return (
        <p>
          <b>
            {part.name} {part.exerciseCount}
          </b>
          <br /> project exercises {part.groupProjectCount}
        </p>
      );
    case 'special':
      return (
        <p>
          <b>
            {part.name} {part.exerciseCount}
          </b>
          <br /> <i>{part.description}</i>
          <br />
          required skills: {part.requirements}
        </p>
      );

    default:
      return assertNever(part);
  }
}

export default Part;
