import { Table } from "@mantine/core"

/**
 * Construction d'un tableau à partir d'une table de BDD
 * @param {*} keysHeader  En-têtes de la table
 * @param {*} valuesV Valeurs d'une entrée
 * @returns Tableau remplis
 */
export const constructTable = (keysHeader, valuesV) => {

    const headers = (
        <tr>
            {keysHeader.map(
                h => <th>{h}</th>
            )}
        </tr>
    );

    let values = () => {

        return valuesV.map(
            (v) => {
                return (
                    <tr>
                        {keysHeader.map(
                            (h) => {
                                if (typeof (v[h]) !== "object") {
                                    return (
                                        <td>
                                            {v[h]}
                                        </td>)
                                } else if (!v[h]) {
                                    return (
                                        <td>NULL</td>
                                    )
                                } else if (v[h]) {
                                    console.log("HEADER", v[h].id);
                                    return (
                                        <td>
                                            {v[h].id}
                                        </td>
                                    )
                                }
                            }
                        )}
                    </tr>
                )
            }

        )
    };

    return (
        <Table>
            <thead>{headers}</thead>
            <tbody>{values()}</tbody>
        </Table>
    )
}
