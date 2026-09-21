import { useMemo } from 'react';
import { useEmployees } from '../../context/EmployeeContext';
import { leaveRequests } from '../../data/leaveRequests';
import Card from '../../components/common/Card';

export default function Leave() {
  const { employees } = useEmployees();
  const employeeMap = new Map(employees.map((employee) => [employee.id, employee]));

  const summary = useMemo(
    () => ({
      pending: leaveRequests.filter((item) => item.status === 'Pending').length,
      approved: leaveRequests.filter((item) => item.status === 'Approved').length,
      rejected: leaveRequests.filter((item) => item.status === 'Rejected').length,
    }),
    []
  );

  return (
    <div>
      <div className="page-title">
        <div>
          <p className="eyebrow">Leave</p>
          <h2>Leave management</h2>
          <p className="muted">Review leave trends, requests, and approvals.</p>
        </div>
      </div>

      <div className="stats-grid">
        {[
          ['Pending', summary.pending],
          ['Approved', summary.approved],
          ['Rejected', summary.rejected],
          ['Total requests', leaveRequests.length],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="stat-label">{label}</p>
            <strong className="stat-value">{value}</strong>
          </Card>
        ))}
      </div>

      <Card title="Recent leave requests">
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>Start</th>
                <th>End</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => {
                const employee = employeeMap.get(request.employeeId);
                const statusClass =
                  request.status === 'Approved'
                    ? 'badge-success'
                    : request.status === 'Pending'
                      ? 'badge-warning'
                      : 'badge-neutral';

                return (
                  <tr key={request.id}>
                    <td>{employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown employee'}</td>
                    <td>{request.type}</td>
                    <td>{request.startDate}</td>
                    <td>{request.endDate}</td>
                    <td>{request.reason}</td>
                    <td>
                      <span className={`badge ${statusClass}`}>
                        <i />
                        {request.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
