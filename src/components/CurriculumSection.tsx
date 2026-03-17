"use client";

import { motion } from "framer-motion";
import { BookOpen, Tent, MessageCircle, CheckSquare } from "lucide-react";

type ItemType = "Lecture" | "Activity" | "Feedback" | "Wrap-up";

interface CurriculumItem {
  type: ItemType;
  label: string;
}

interface TimeSlot {
  time: string;
  items: CurriculumItem[];
}

interface Day {
  day: string;
  title: string;
  theme: string;
  slots: TimeSlot[];
}

const curriculum: Day[] = [
  {
    day: "Day 1",
    title: "自分を知り、リーダーの在り方を定義する",
    theme: "マインドセットの変革と自己理解",
    slots: [
      {
        time: "AM",
        items: [
          { type: "Lecture", label: "オープニング：チームビルディングと目標の共有" },
          { type: "Activity", label: "サバイバルゲーム：緊迫した状況下での意思決定" },
        ],
      },
      {
        time: "PM",
        items: [
          { type: "Lecture", label: "マネジメント vs リーダーシップ" },
          { type: "Activity", label: "最も高い塔：限られた資源での戦略立案" },
        ],
      },
      {
        time: "夜",
        items: [
          { type: "Lecture", label: "動物人間論：本質的な人間理解" },
          { type: "Activity", label: "テント設営・野外調理：生きる力の実践" },
        ],
      },
    ],
  },
  {
    day: "Day 2",
    title: "チームの限界を突破し、信頼を築く",
    theme: "実践的なリーダーシップとタイムマネジメント",
    slots: [
      {
        time: "AM",
        items: [
          { type: "Lecture", label: "効果的なリーダーの資質とタイムマネジメント" },
          { type: "Activity", label: "漏れるパイプ：トラブル対応と情報伝達" },
        ],
      },
      {
        time: "PM",
        items: [
          { type: "Activity", label: "カヤック：チームの同期と宝探し" },
          { type: "Activity", label: "ハンギ（地中蒸し料理）：長期的な準備と役割分担" },
        ],
      },
      {
        time: "夜",
        items: [
          { type: "Feedback", label: "対話による深いリフレクションと成長の言語化" },
        ],
      },
    ],
  },
  {
    day: "Day 3",
    title: "学びを日常に繋げ、次の一歩を踏み出す",
    theme: "統合とネクストアクション",
    slots: [
      {
        time: "AM",
        items: [
          { type: "Lecture", label: "困難な会話（Difficult Conversation）への向き合い方" },
        ],
      },
      {
        time: "PM",
        items: [
          { type: "Activity", label: "オリエンテーリング：3日間のスキルの集大成" },
        ],
      },
      {
        time: "最終",
        items: [
          { type: "Wrap-up", label: "未来へのコミットメント：アクションプランの策定" },
        ],
      },
    ],
  },
];

const typeConfig: Record<ItemType, { label: string; icon: React.ReactNode; badge: string; text: string }> = {
  Lecture: {
    label: "講義",
    icon: <BookOpen size={13} />,
    badge: "bg-blue-100 text-blue-700",
    text: "text-blue-700",
  },
  Activity: {
    label: "実践",
    icon: <Tent size={13} />,
    badge: "bg-orange-100 text-orange-600",
    text: "text-orange-600",
  },
  Feedback: {
    label: "振り返り",
    icon: <MessageCircle size={13} />,
    badge: "bg-purple-100 text-purple-700",
    text: "text-purple-700",
  },
  "Wrap-up": {
    label: "まとめ",
    icon: <CheckSquare size={13} />,
    badge: "bg-green-100 text-green-700",
    text: "text-green-700",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CurriculumSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">プログラム例</h2>
        <p className="mb-10 text-sm text-gray-500">
          3日間～10日間までカスタマイズが可能です
        </p>

        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {curriculum.map((day) => (
            <motion.div
              key={day.day}
              variants={cardVariants}
              className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-gray-900 px-5 py-4">
                <span className="text-xs font-semibold tracking-widest text-yellow-400 uppercase">
                  {day.day}
                </span>
                <p className="mt-1 font-bold text-white leading-snug">{day.title}</p>
                <p className="mt-1 text-xs text-gray-400">{day.theme}</p>
              </div>

              {/* Time slots */}
              <div className="flex flex-col divide-y divide-gray-100 flex-1 p-4 gap-4">
                {day.slots.map((slot) => (
                  <div key={slot.time} className="pt-4 first:pt-0">
                    <p className="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {slot.time}
                    </p>
                    <ul className="space-y-2">
                      {slot.items.map((item, i) => {
                        const config = typeConfig[item.type];
                        return (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className={`mt-0.5 flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${config.badge}`}
                            >
                              {config.icon}
                              {config.label}
                            </span>
                            <span className="text-sm text-gray-700 leading-snug">
                              {item.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
