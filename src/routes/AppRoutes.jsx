import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Employees from '../pages/Employees/Employees';
import EmployeeProfile from '../pages/EmployeeProfile/EmployeeProfile';
import Organization from '../pages/Organization/Organization';
import ComingSoon from '../components/common/ComingSoon';
import EmptyState from '../components/common/EmptyState';
export default function AppRoutes() { return <Routes><Route element={<AppLayout />}><Route path="/" element={<Navigate to="/dashboard" replace />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/employees" element={<Employees />} /><Route path="/employees/:id" element={<EmployeeProfile />} /><Route path="/organization" element={<Organization />} />{['attendance','leave','goals','recognition','learning','analytics','settings'].map(path => <Route key={path} path={'/'+path} element={<ComingSoon title={path[0].toUpperCase()+path.slice(1)} />} />)}<Route path="*" element={<EmptyState title="Page not found" message="The page you requested does not exist." actionLabel="Back to dashboard" actionTo="/dashboard" />} /></Route></Routes>; }
