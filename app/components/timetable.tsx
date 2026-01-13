import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const fees = [
    {
        course: "Regular (With License)",
        vehicles: {
            wagonR: "9000/-",
            i20: "9000/-",
            hondaCity: "9500/-",
            ertiga: "11000/-",
        },
        duration: "1 Month",
        days: "20 Days",
        practice: "30 Min",
    },
    {
        course: "Training Only",
        vehicles: {
            wagonR: "7500/-",
            i20: "7500/-",
            hondaCity: "8000/-",
            ertiga: "9500/-",
        },
        duration: "1 Month",
        days: "25 Days",
        practice: "30 Min",
    },
    {
        course: "Refresher / Advanced",
        vehicles: {
            wagonR: "3500/-",
            i20: "2500/-",
            hondaCity: "-",
            ertiga: "5500/-",
        },
        duration: "1 Month",
        days: "20 Days",
        practice: "1 Hr",
    },
]

const Timetable = () => {
    return (
        <section id="fees" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Fee Structure
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Transparent pricing for all our driving courses
                    </p>
                </div>

                <div className="glass rounded-2xl overflow-hidden p-6 overflow-x-auto">
                    <table className="w-full text-sm text-center">
                        <thead className="text-foreground bg-primary/10">
                            <tr>
                                <th rowSpan={2} className="border border-border/50 p-3 font-bold text-base min-w-[150px]">Course</th>
                                <th colSpan={4} className="border border-border/50 p-3 font-bold text-base">Vehicles</th>
                                <th rowSpan={2} className="border border-border/50 p-3 font-bold text-base">Duration</th>
                                <th rowSpan={2} className="border border-border/50 p-3 font-bold text-base">No. Of Days</th>
                                <th rowSpan={2} className="border border-border/50 p-3 font-bold text-base">Practice</th>
                            </tr>
                            <tr>
                                <th className="border border-border/50 p-2 text-muted-foreground">Wagon R</th>
                                <th className="border border-border/50 p-2 text-muted-foreground">i20</th>
                                <th className="border border-border/50 p-2 text-muted-foreground">Honda City</th>
                                <th className="border border-border/50 p-2 text-muted-foreground">Ertiga</th>
                            </tr>
                        </thead>
                        <tbody className="text-foreground">
                            {fees.map((row, index) => (
                                <tr key={index} className="hover:bg-primary/5 transition-colors">
                                    <td className="border border-border/50 p-4 font-medium text-left">{row.course}</td>
                                    <td className="border border-border/50 p-4">{row.vehicles.wagonR}</td>
                                    <td className="border border-border/50 p-4">{row.vehicles.i20}</td>
                                    <td className="border border-border/50 p-4">{row.vehicles.hondaCity}</td>
                                    <td className="border border-border/50 p-4">{row.vehicles.ertiga}</td>
                                    <td className="border border-border/50 p-4">{row.duration}</td>
                                    <td className="border border-border/50 p-4">{row.days}</td>
                                    <td className="border border-border/50 p-4">{row.practice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Timetable
