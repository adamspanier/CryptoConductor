# CryptoConductor 
### A Distributed Project Scoring System

## Summary
CryptoConductor serves as a solution for remot team grading efforts in cross-diciplinary consulting and research. This system ismean to replace loosely connected Google Sheets, Excel Spreadsheets, Text Files, and other disparate and disorganized data containers. CryptoConductor serves as a means for small, domain specific professionals to coordinate across intellectual domains such that a robust and accurate project analysis can be made based on a variety of different views for any entity in question. Whether the analysis concerns a new software company startup, a cutting edge technical invention, or a cross-disciplinary research project, CryptoConductor can help coordinate specialist input and automatically create a simple output score for any existing or continuing project.

CryptoConductor is not Microsoft Teams; nor does it intend to be. Instead CryptoConductor seeks to silo data and coordinate data processing tasks such that automated evaluations and health scores can be carried out without user direction. Instead of visual and auditory interactions, CryptoConductor is meant instead to allow data to interact with data in automated, organization defined functions.

CryptoConductor features specialist profiles for each member of your team. This could include any number of specialties: a lawyer, a software developer, a businessman, a social media guru, or maybe a cybersecurity professional. Each profile is given role-based domain-specific access for project scoring and input based in the specialist discipline and niche. Pulling disciplines and specialists together, CryptoConductor uses Projects to allow your team to create unique projects that coordinate all specialist input by domain and allows for customizeable weighting for final output scoring. This allows every project to be correctly scoped for pertinent domains.

## Installation

1. Run the following code in a new terminal window from your chosen installation directory.
```bash
git clone https://github.com/adamspanier/CryptoConductor.git && cd CryptoConductor
git clone https://github.com/adamspanier/CryptoConductor-Front.git && ./run.sh
```

## Python Instructions
To run CryptoConductor via Python: 

1. From terminal, run the command below in the CryptoConductor/source directory.
```bash
python3 manage.py runserver 
```

2. Visit the web interface at localhost:8000 using a web browser.

_NOTE:_ CryptoConductor will run immediately after installation. You will only need to run the above command if you've stopped the CryptoConductor instance. 

## Docker Container Instructions

To run CryptoConductor via Docker container

1. Run the docker.sh shell script
```bash
./docker.sh
```

2. Visit the web interface at localhost:8000 using a web browser.

## License
MIT License

Copyright (c) 2022 Adam Spanier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Design

#### [Design Documentation](https://github.com/adamspanier/CryptoConductor/blob/main/docs/README.md)
#### [Models](https://github.com/adamspanier/CryptoConductor/blob/main/docs/Models.md)
#### [Views](https://github.com/adamspanier/CryptoConductor/blob/main/docs/Views.md)
