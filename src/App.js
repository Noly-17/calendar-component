import './App.css';
import DatePicker from './pages/datePicker';
import DatePickerInput from './pages/datePickerInput';
function App() {
  return (
    <div className="App flex justify-center gap-10 items-center h-screen">
      <DatePickerInput />
      <DatePicker />
    </div>
  );
}

export default App;
