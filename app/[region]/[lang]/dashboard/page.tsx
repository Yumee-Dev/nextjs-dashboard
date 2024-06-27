import All from '@/app/dashboard/(overview)/page';

export default function Page({
  params: { region, lang },
}: {
  params: { region: string; lang: string };
}) {
  return (
    <div>
      <h2>Current region is {region}</h2>
      <h2>Current lang is {lang}</h2>
      <All />
    </div>
  );
}
