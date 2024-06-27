import All from '@/app/dashboard/(overview)/page';

export default function Page({
  params: { region },
}: {
  params: { region: string };
}) {
  return (
    <div>
      <h2>Current region is {region}</h2>
      <h2>Current lang is default</h2>
      <All />
    </div>
  );
}
