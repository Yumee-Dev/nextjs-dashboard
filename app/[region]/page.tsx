import All from '@/app/page';

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
