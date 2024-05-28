import React from 'react'

export default function KeyFeatures({ keyFeatures, title, whyChoose, intro, conclusion }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <h3>{intro}</h3>
      <ul>
        {
          keyFeatures && keyFeatures?.map(f => (
            <li key={f.feature}><p><strong>{f.feature}: </strong> {f.description}</p></li>
          ))
        }
      </ul>
      <h4>Why Choose React Query?</h4>
      <ul>
        {
          whyChoose && whyChoose?.map(f => (
            <li key={f.name}><p><strong>{f.name}: </strong> {f.description}</p></li>
          ))
        }
      </ul>
      <h4>Conclusion</h4>
      <h5>{conclusion}</h5>
      <p>Please support me on <a target="_blank" href="https://www.linkedin.com/posts/adeshkumar256_keyfeaturesofreactquery-automaticcaching-activity-7200883392781967360-KGw5?utm_source=share&utm_medium=member_desktop">linkedin</a></p>
      <p>Here is the <a target="_blank" href="https://github.com/adeshkumar256/react-query-with-adesh">github</a> link for the code demo.</p>
    </div>
  )
}
