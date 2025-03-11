import { Metadata } from "next";
import Form from 'next/form'

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div>
    <p>Customers Page</p>
    <Form action="/dashboard/customers">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
    </div>
  );
};
