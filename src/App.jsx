import { EmployeeProvider } from './context/EmployeeContext';
import AppRoutes from './routes/AppRoutes';
export default function App() { return <EmployeeProvider><AppRoutes /></EmployeeProvider>; }
