# 10crmBank Pro

## Project Overview
Fintech platform with 10k+ downloads supporting SMS-based transactions, wallet operations, and real-time ledger synchronization.

## Requirements
- Support for thousands of concurrent mobile users.
- Real-time balance updates via SMS and App.
- Secure peer-to-peer balance transfers.
- Robust audit logs for every transaction.

## My Contributions
- **Lead Developer**: Built the entire backend using CodeIgniter 4.
- **Database Optimization**: Designed the ledger system to handle high-frequency writes and reads.
- **Performance**: Optimized SQL queries to maintain sub-second response times for mobile clients.

## Solutions
- Designed a **double-entry bookkeeping system** to ensure mathematical correctness of all wallet balances.
- Implemented **Redis caching** for frequently accessed user sessions and balance snapshots.
- Created a **stateless API architecture** with JWT authentication for scalable mobile client support.
