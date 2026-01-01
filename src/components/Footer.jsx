export default function Footer() {
  return (
    <footer>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
        <img src="/favicon.png" alt="She Wires Words Logo" style={{width: '24px', height: '24px', borderRadius: '4px'}} />
        <span style={{color: '#fff8dc', fontWeight: 'bold'}}>She Wires Words</span>
      </div>

      <p>&copy;2025 She Wires Words. All rights reserved. Created by Alexa Curtis.</p>
      <p style ={{fontWeight: "50", fontSize:"12px"}} >She Wires Words receives 501(c)(3) status through fiscal sponsorship from Hack Club.</p>
    </footer>
  );
}
