import TableTodo from "./TableTodo";

export const metadata = {
  title: "Todo Apps Jsonplaceholder",
};

export const revalidate = 5 //revalidate page every 5 second 

// "getServerSideProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching
// not suppport in app router, this is another way in this case
// SSR and Redux concept only work when add to top 'use client'
// see on table component

export default function Page({}) {
  return <TableTodo />;
}
