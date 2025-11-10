import { COLORS } from "@/lib/constants"

interface Doctor {
  id: number
  name: string
  specialization: string
  image: string
  schedule: string
}

interface DoctorScheduleProps {
  title: string
  icon: string
  doctors: Doctor[]
}

export default function DoctorSchedule({ title, icon, doctors }: DoctorScheduleProps) {
  return (
    <div
      className="p-8 rounded-xl shadow-lg"
      style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.secondary}` }}
    >
      <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>
        <img src={icon || "/placeholder.svg"} alt={title} className="inline mr-3 w-6 h-6" />
        {title}
      </h3>
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <img
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{doctor.name}</h4>
                <p className="text-gray-600 text-sm">{doctor.specialization}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold" style={{ color: COLORS.primary }}>
                {doctor.schedule}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
