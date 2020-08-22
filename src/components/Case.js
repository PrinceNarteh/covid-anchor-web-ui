function Case({ caseData, id }) {
  return (
    <div className="case">
      <h2>{caseData.country}</h2>
      <p>Total Cases: {caseData.cases}</p>
      <p>Active Cases: {caseData.active}</p>
      <p>Recovered Cases: {caseData.recovered}</p>
      <p>Death Cases: {caseData.deaths}</p>

      {/* STYLING */}
      <style jsx>
        {`
            .case {
              height: 30rem;
              padding: 3rem;
              background-color: var(--color-primary);
              animation: fadeIn 0.8s ease-in-out both ${id * 200}ms;
            }

            @keyframes fadeIn {
              0%{
                opacity: 0;
                transform: translateY(-30%)
              }

              100%{
                opacity: 1;
                transform: translateY(0%)
              }
            }
        `}
      </style>
    </div>
  );
}

export default Case;
