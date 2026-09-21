import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getEmployees, saveEmployees } from '../services/employeeStorage';
const EmployeeContext = createContext(null);
export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(getEmployees);
  useEffect(() => saveEmployees(employees), [employees]);
  const value = useMemo(() => ({ employees, addEmployee: employee => setEmployees(prev => [...prev, employee]), updateEmployee: (id, updates) => setEmployees(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e)), deleteEmployee: id => setEmployees(prev => prev.filter(e => e.id !== id)), getEmployeeById: id => employees.find(e => e.id === id) }), [employees]);
  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
}
export function useEmployees() { const context = useContext(EmployeeContext); if (!context) throw new Error('useEmployees must be used inside EmployeeProvider'); return context; }
