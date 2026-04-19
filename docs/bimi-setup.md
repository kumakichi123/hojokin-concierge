# BIMI Setup Notes

## Current status

Checked on 2026-04-19:

- `mirai-axis.com` SPF exists: `v=spf1 include:_spf.google.com ~all`
- `mirai-axis.com` MX points to Google Workspace
- `_dmarc.mirai-axis.com` does not exist
- `default._domainkey.mirai-axis.com` does not exist

BIMI is not active yet because Gmail requires:

- DKIM enabled for the sending domain
- DMARC with `p=quarantine` or `p=reject`
- DMARC `pct=100`
- A BIMI logo served over HTTPS
- A CMC or VMC for Gmail display

## Files prepared

- Source logo PNG: `/bimi-purple.png`
- Current BIMI placeholder SVG: `/bimi.svg`
- Suggested public logo URL: `https://hojokin.mirai-axis.com/bimi.svg`

The current `bimi.svg` is a deployment placeholder that wraps the approved purple logo image. It is useful for hosting and URL wiring, but it may still need a stricter final SVG conversion before certificate issuance or production BIMI validation.

## DNS records to add

### 1. DKIM

Generate the DKIM key in Google Workspace Admin and publish the TXT record Google gives you.

Typical host:

```txt
google._domainkey.mirai-axis.com
```

Value:

```txt
v=DKIM1; k=rsa; p=...
```

Do not guess this value. Use the exact value from Google Admin.

### 2. DMARC

Start with quarantine if you want a safer rollout:

Host:

```txt
_dmarc.mirai-axis.com
```

Value:

```txt
v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@mirai-axis.com; adkim=s; aspf=s
```

If all legitimate mail is aligned, you can later move to:

```txt
v=DMARC1; p=reject; pct=100; rua=mailto:dmarc@mirai-axis.com; adkim=s; aspf=s
```

### 3. BIMI

After you get a CMC or VMC and host its PEM file over HTTPS, publish:

Host:

```txt
default._bimi.mirai-axis.com
```

Value:

```txt
v=BIMI1; l=https://hojokin.mirai-axis.com/bimi.svg; a=https://YOUR_CERT_HOST/bimi.pem
```

If you want to validate a self-asserted record before the certificate is ready, some tools accept:

```txt
v=BIMI1; l=https://hojokin.mirai-axis.com/bimi.svg;
```

But Gmail will not reliably display the logo without a CMC or VMC.

## External steps still required

1. In Google Workspace Admin, generate and enable DKIM for `mirai-axis.com`.
2. Add the DMARC TXT record to DNS.
3. Convert the purple logo into a certificate-ready BIMI SVG if your issuer requires a stricter file than the current placeholder.
4. Obtain a CMC or VMC from a supported issuer.
5. Host the PEM file over HTTPS.
6. Add the BIMI TXT record.

## Verification

After deployment and DNS propagation, verify:

- `nslookup -type=TXT _dmarc.mirai-axis.com`
- `nslookup -type=TXT google._domainkey.mirai-axis.com`
- `nslookup -type=TXT default._bimi.mirai-axis.com`
- Open `https://hojokin.mirai-axis.com/bimi.svg`
- Open `https://hojokin.mirai-axis.com/bimi-purple.png`

## Notes

- Gmail supports BIMI for Google Workspace, but logo display requires third-party certification.
- If your logo is not trademarked, check whether a Common Mark Certificate is available for your case.
