export interface DateTimeTypes {
    date: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    handleChange: (value:Date | null, field: string) => void;
}
