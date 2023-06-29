import Card from "./card";

export interface IColumnConfig {
    title: string;
    prop?: string
}

export interface ITableConfig {
    rows?: any[],
    columns: IColumnConfig[]
}

export default function CustomTable({ columns, rows }: ITableConfig) {
    return (
        <Card>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        {columns.map((col) => {
                                            return  <th scope="col" key={'th-' + col.prop} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{col.title}</th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows?.map((row, index) => {
                                        return (
                                            <tr key={'tr-' + index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                                                {columns.map(col => {
                                                    return (
                                                        <td key={'td-' + col.prop} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{row[col.prop ?? '']}</td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                    {/* <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr> */}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}