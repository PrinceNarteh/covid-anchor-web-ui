import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Case from "../components/Case";

function Cases({ cases }) {
  return (
    <Layout title="Cases | Covid Anchor">
      <div className="content">
        <h1>Cases Page</h1>

        {/* List of cases */}
        <div className="cases">
          {cases.map((item, key) =>
            <Case key={key} id={key} caseData={item} />
          )}
        </div>

        {/* STYLING */}
        <style jsx>
          {`
            .content {
              width: 100%;
              height: 100%;
              padding: 4rem;
            }

            .cases {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
              gap: 4rem;
            }

            
        `}
        </style>
      </div>
    </Layout>
  );
}

// Get Cases
const CASE_API = "http://localhost:5000";
export async function getStaticProps() {
  const response = await fetch(CASE_API);
  const cases = await response.json();

  return {
    props: {
      cases,
    },
  };
}

export default Cases;
