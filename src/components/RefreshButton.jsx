// Create a button that triggers a quote refresh on click
function RefreshButton({ onClick }) {
    return (
      <button onClick={onClick} style={{ padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer" }}>
        Get New Quote
      </button>
    );
  }
  
  export default RefreshButton;
  