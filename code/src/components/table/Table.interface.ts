export interface Header {
	name: string;
	label: string;
	columnSpan: number;
}

interface TableRow {
	[key: string]: string | number;
}

export interface TableProps {
	headers: Header[];
	data: TableRow[];
}
