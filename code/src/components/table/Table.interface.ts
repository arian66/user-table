export interface Header {
	name: string;
	label: string;
	columnSpan: number;
}

interface TableRow {
	[key: string]: any;
}

export interface TableProps {
	headers: Header[];
	data: TableRow[];
}
