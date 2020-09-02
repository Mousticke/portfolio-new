# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

Supported version with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |             |


I release patches for security vulnerabilities. Which versions are eligible
receiving such patches depend on the CVSS v2.0 Rating: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator?calculator&version=2

2 metrics are used to evaluate the security score
- Vulenrability
- Impact

3 metrics for the vulnerability are used as follow : 
- Access Vector (Local (L)/ Ajacent Network (A) / Network (N))
- Access Complexity (High (H) / Medium (M) / Low (L))
- Authentication (Multiple (M) / Single (S) / None (N))

3 metrics for the impact are used as follow : 
- Confidentiality Impact (Complete (C) / Partial (P) / None (N))
- Integrity Impact (Complete (C) / Partial (P) / None (N))
- Availability Impact (Complete (C) / Partial (P) / None (N))

  <details>
    <summary><b>Score Details</b></summary>
    
      BaseScore = (.6*Impact +.4*Exploitability-1.5)*f(Impact)
      
      AccessComplexity = case AccessComplexity of
                        high:   0.35
                        medium: 0.61
                        low:    0.71
      
      Authentication   = case Authentication of
                        Requires no authentication:                    0.704
                        Requires single instance of authentication:    0.56
                        Requires multiple instances of authentication: 0.45
 
      AccessVector     = case AccessVector of
                        Requires local access:    0.395
                        Local Network accessible: 0.646
                        Network accessible:       1
 
      ConfImpact       = case ConfidentialityImpact of
                        none:             0
                        partial:          0.275
                        complete:         0.660
 
      IntegImpact      = case IntegrityImpact of
                        none:             0
                        partial:          0.275
                        complete:         0.660
 
      AvailImpact      = case AvailabilityImpact of
                        none:             0
                        partial:          0.275
                        complete:         0.660
  </details>



| CVSS v2.0 | Supported Versions                        |
| --------- | ----------------------------------------- |
| 0.0.x  | Releases within the previous three months |

## Reporting a Vulnerability

Please report (suspected) security vulnerabilities to
**[security@akimbch.com](mailto:security@akimbch.com)**. You will receive a response from
us within 72 hours. If the issue is confirmed, we will release a patch as soon
as possible depending on complexity but historically within a few days.
