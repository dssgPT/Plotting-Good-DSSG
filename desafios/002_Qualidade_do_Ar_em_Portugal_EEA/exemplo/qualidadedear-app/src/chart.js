import * as _ from "lodash";
import { min, max, median } from "d3-array";
import { scaleLinear, scaleTime } from "@visx/scale";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { Grid } from "@visx/grid";
import { format } from "d3-format";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "./chart.css";

export default function Chart(props) {
  const width = window.screen.width / 4;
  const height = 450;
  var margin = { top: 20, right: 40, bottom: 40, left: 60 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const data = _.filter(props.data, function (o) {
    return o.metrica === "Média anual" && (o.ano > 2010) & (o.ano < 2022);
  });

  const uniqueEstacao = [
    ...new Set(props.data.map((estacao) => estacao.nome_estacao)),
  ];

  uniqueEstacao.sort(function (x, y) {
    return props.selectedEstacao !== ""
      ? x == props.selectedEstacao
        ? -1
        : y == props.selectedEstacao
        ? 1
        : 0
      : null;
  });
  data.sort(function (a, b) {
    return (
      uniqueEstacao.indexOf(b.nome_estacao) -
      uniqueEstacao.indexOf(a.nome_estacao)
    );
  });
  const poluente = [...new Set(data.map((el) => el.poluente))];

  const yScale = scaleLinear({
    domain: [2021, 2011],
    range: [yMax, 0],
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {poluente.map((poluente) => {
        const poluenteData = _.filter(data, function (o) {
          return o.poluente === poluente;
        });
        const contagemEstacao = _.filter(poluenteData, function (o) {
          return o.nome_estacao === props.selectedEstacao;
        }).length;
        let nivelPoluicao = [];
        poluenteData.map((el) => nivelPoluicao.push(el["nível_de_poluicao"]));
        const xScale = scaleLinear({
          domain: [min(nivelPoluicao), max(nivelPoluicao)],
          range: [0, xMax],
        });
        return (
          <div
            id={poluente}
            style={{ backgroundColor: "#f8f9fa", margin: "5px" }}
          >
            <p style={{ fontWeight: "bold", margin: "2px" }}>💨{poluente}💨</p>
            <p style={{ fontSize: "12px", padding: 0, margin: 0 }}>
              {[...new Set(poluenteData.map((el) => el.poluente_descricao))]}
            </p>
            <svg width={width} height={height}>
              <Group left={margin.left} top={margin.top}>
                <Grid
                  xScale={xScale}
                  yScale={yScale}
                  width={xMax}
                  height={yMax}
                  strokeDasharray={(4, 4)}
                  //   stroke={"white"}
                  //   numTicksRows={numTicksForHeight(height)}
                  //   numTicksColumns={numTicksForWidth(width)}
                />
                <AxisLeft
                  scale={yScale}
                  tickFormat={function (d) {
                    return format("d")(d);
                  }}
                  tickStroke="#adb5bd"
                  //   tickLineProps={() => ({ stroke: "#adb5bd" })}
                  hideAxisLine
                  //   axisLineClassName="axis-line"
                ></AxisLeft>
                <AxisBottom
                  scale={xScale}
                  top={yMax}
                  numTicks={10}
                  hideAxisLine
                  tickStroke="#adb5bd"
                  //   tickLineProps={() => ({ stroke: "#adb5bd" })}

                  //   axisLineClassName="axis-line"
                ></AxisBottom>
                {poluenteData.map((d) => {
                  return (
                    <>
                      {d.nível_de_poluicao > 0 ? (
                        <Tippy
                          content={
                            <>
                              <p>{d.nome_estacao}</p>
                              <p>
                                {d.nível_de_poluicao}{" "}
                                {d.unidade_de_nivel_de_poluicao}
                              </p>
                            </>
                          }
                        >
                          <circle
                            cx={xScale(d.nível_de_poluicao)}
                            cy={yScale(d.ano)}
                            r={4}
                            opacity={
                              props.selectedEstacao === d.nome_estacao ? 1 : 0.5
                            }
                            fill={
                              props.selectedEstacao === d.nome_estacao
                                ? "#1985a1"
                                : "#adb5bd"
                            }
                            stroke={"white"}
                          ></circle>
                        </Tippy>
                      ) : null}
                    </>
                  );
                })}
                {contagemEstacao < 1 ? (
                  <>
                    <text
                      x={width / 4}
                      y={yScale(2015)}
                      class="node"
                      style={{ fontWeight: "bold", overflowWrap: "normal" }}
                    >
                      Sem dados
                    </text>
                  </>
                ) : null}
              </Group>
            </svg>
          </div>
        );
      })}
    </div>
  );
}
