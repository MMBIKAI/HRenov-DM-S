# HRenov-DM-S

**A digital twin decision-support framework for hospital building energy renovation.**

Developed as part of a 3-year R&D engineering role at ESTIA (Engineering School, Bidart, France), within the EU Interreg SUDOE **Hospital 4.0** project — a cross-border initiative on hospital energy management and renovation strategy.

---

## 🎯 What it does

HRenov-DM-S helps decision-makers explore and compare energy renovation strategies for hospital buildings, without needing an engineering background. It translates complex multi-objective optimization results into interactive, understandable visualizations — bridging the gap between simulation data and real-world decision-making.

The tool was built from **15+ operational requirements** gathered directly from hospital stakeholders, technical and non-technical alike, and turned into an analytics platform that supports real-time scenario exploration.

## ⚙️ How it works

- **Multi-objective optimization** using **NSGA-II** to generate a Pareto front of renovation strategies, balancing competing objectives (e.g. cost, energy performance, comfort)
- **Design Space Exploration (DSE)** to map out the space of feasible renovation options before optimization
- **Interactive dashboards** (D3.js, Plotly) that let users filter, compare, and drill into scenarios visually
- A **decision-support layer** that translates optimization output into concrete, ranked renovation recommendations

## 🛠️ Tech stack

- Data visualization: D3.js, Plotly
- Optimization: NSGA-II (multi-objective genetic algorithm)
- NodeJS

## 👥 Who this was built for

Hospital facility managers and technical teams evaluating energy renovation strategies — people who needed to understand *why* a recommendation was made, not just *what* the recommendation was.

## 📌 Status

Research project completed as part of the SUDOE Hospital 4.0 Interreg program (2021–2024).

---

*Part of my work as an R&D Engineer at ESTIA, combining multi-objective optimization research with practical, stakeholder-facing tooling.*
