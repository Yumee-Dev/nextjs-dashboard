import { headers } from 'next/headers';

export default function RequestInfo() {
  const headersList = headers();
  const headersArr: { key: string; value: string }[] = [];

  headersList.forEach((value, key) => headersArr.push({ key, value }));

  return (
    <div>
      <p>Hi! The headers are:</p>
      <ul>
        {headersArr.map(({ key, value }) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
