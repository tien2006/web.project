import React, { useState } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';

// Dữ liệu sản phẩm của bạn
const allProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX3U-32MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-32MR_uwdzgr.webp',
    description: 'PLC compact MELSEC-F series, hiệu năng cao, tích hợp 16 DI (24 V DC) và 16 relay DO, nguồn AC 100–240 V.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240 V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24 V DC) + 16 relay DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '64 K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '≈ 0.065 µs/lệnh' },
      { label: 'Công suất tiêu thụ', value: '≈ 35 W' },
      { label: 'Nhiệt độ hoạt động', value: '0 °C đến 55 °C' },
    ],
    features: [
      'Thiết kế compact, dễ dàng lắp đặt DIN-rail',
      'Tốc độ xử lý cao cho ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, tương thích với FX2N và nhiều module mở rộng',
      'Relay DO chịu tải tốt, phù hợp điều khiển trực tiếp',
    ],
  },
  {
    id: 2,
    name: 'PLC Mitsubishi FX3U-64MT/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-64MT_uhz0w0.jpg',
    description: 'PLC compact MELSEC-F series với 64 điểm I/O tích hợp, tốc độ xử lý cao và khả năng mở rộng qua CC-Link.',
    specifications: [
      { label: 'I/O tích hợp', value: '32 DI + 32 DO (64 điểm)' },
      { label: 'Bộ nhớ chương trình', value: '64 000 bước' },
      { label: 'Tốc độ xử lý (cơ bản)', value: '≈ 0.065 µs' },
      { label: 'Tốc độ xử lý (ứng dụng)', value: '≈ 0.642 µs' },
      { label: 'Mở rộng I/O tối đa', value: '384 điểm qua CC-Link' },
      { label: 'Nguồn & công suất', value: 'AC 100–240 V, 45 W' },
    ],
    features: [
      'Tích hợp CPU, nguồn & I/O trong một',
      'Xử lý nhanh, phù hợp ứng dụng phức tạp',
      'Hỗ trợ mở rộng linh hoạt qua CC-Link',
      'Bộ nhớ lớn, cho phép chương trình phức tạp',
    ],
  },
  {
    id: 3,
    name: 'PLC Mitsubishi FX1S-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1S-14MR-ES_t4hpet.jpg',
    description: 'PLC FX1S series dạng brick nhỏ gọn, 8 DI + 6 DO, nguồn AC 85-264 V, phù hợp ứng dụng cơ bản.',
    specifications: [
      { label: 'Nguồn cấp', value: '85–264 VAC' },
      { label: 'I/O tích hợp', value: '8 DI + 6 DO (relay)' },
      { label: 'Điện áp đầu vào', value: '24 VDC (source/sink)' },
      { label: 'Công suất tiêu thụ', value: '25 W' },
      { label: 'Program Capacity', value: '2 000 bước' },
      { label: 'Tốc độ đầu ra xung cao', value: '2 đầu ra 100 kHz' },
    ],
    features: [
      'Kích thước nhỏ, lắp đặt dễ',
      'Đầu ra xung tốc độ cao cho điều khiển cơ bản',
      'Nguồn rộng, dùng linh hoạt',
      'Phù hợp cho các ứng dụng nhỏ, tiết kiệm chi phí',
    ],
  },
  {
    id: 4,
    name: 'PLC Mitsubishi FX1N-24MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1N-24MR-ES_ptmkm4.jpg',
    description: 'PLC FX1N series, 14 DI + 10 DO (relay), nguồn AC 100–240 V, bộ nhớ ~8 000 bước.',
    specifications: [
      { label: 'Nguồn cấp', value: '100–240 VAC' },
      { label: 'I/O tích hợp', value: '14 DI + 10 DO (relay)' },
      { label: 'Bộ nhớ chương trình', value: '≈ 8 000 bước' },
      { label: 'Công suất', value: '30–32 W' },
    ],
    features: [
      'Số I/O vừa phải cho ứng dụng trung bình',
      'Relay output bền, phù hợp điều khiển tải nhỏ',
      'Nguồn AC toàn cầu (World spec)',
      'Chi phí hợp lý cho ứng dụng công nghiệp nhẹ',
    ],
  },
  {
    id: 5,
    name: 'PLC Mitsubishi FX2N-16MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16MR-ES_hesbb5.jpg',
    description: 'PLC FX2N series với 8 DI + 8 DO (relay), nguồn AC 100–240 V, dung lượng đến 8 000 bước.',
    specifications: [
      { label: 'Nguồn cấp', value: '100–240 VAC' },
      { label: 'I/O tích hợp', value: '8 DI + 8 DO (relay)' },
      { label: 'Bộ nhớ chương trình', value: '8 000 bước' },
      { label: 'Công suất', value: '30 VA' },
      { label: 'Kích thước (WxHxD)', value: '130×90×87 mm' },
    ],
    features: [
      'Thiết kế ổn định, độ bền cao',
      'Relay output thích hợp điều khiển cơ bản',
      'Dung lượng chương trình đủ cho nhiều ứng dụng',
    ],
  },
  {
    id: 6,
    name: 'PLC Mitsubishi FX5U-32MR/ES (iQ-F)',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5U-32MR-ES_ojpolr.jpg',
    description: 'PLC đương đại iQ-F FX5U series, 16 DI + 16 DO, thêm 3 kênh analog, Ethernet, RS-485.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240 V' },
      { label: 'I/O tích hợp', value: '16 DI + 16 DO (relay/transistor)' },
      { label: 'Analog IO', value: '3 kênh (2 IN, 1 OUT)' },
      { label: 'Bộ nhớ chương trình', value: '64 K bước (FLASH)' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Kích thước (WxHxD)', value: '150×90×83 mm' },
      { label: 'Trọng lượng', value: '0.65 kg' },
      { label: 'Tốc độ xử lý LD', value: '34 ns' },
    ],
    features: [
      'Nền tảng iQ-F hiện đại, nhanh và mạnh',
      'Hỗ trợ analog tích hợp, tăng khả năng điều khiển',
      'Mạng công nghiệp sẵn có: Ethernet, RS-485',
      'Có thể mở rộng tới 512 I/O qua CC-Link/AnyWireASLINK',
    ],
  },
  {
    id: 7,
    name: 'PLC Mitsubishi Q03UDECPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176586/Q03UDE_asxaz0.jpg',
    description: 'CPU mô-đun MELSEC-Q QnU universal, bộ nhớ 30 k bước (~120 kB), hỗ trợ Ethernet, tối đa 4096 I/O.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '30 k bước (~120 kB)' },
      { label: 'I/O tối đa', value: '4096 (local/remote)' },
      { label: 'Tốc độ LD', value: '20 ns' },
      { label: 'Giao tiếp', value: 'Ethernet, USB' },
    ],
    features: [
      'CPU QnU hiệu suất cao, nhiều bước program',
      'Hỗ trợ I/O lớn, phù hợp hệ thống quy mô vừa',
      'Ethernet tích hợp, dễ kết nối mạng',
      'Tốc độ xử lý nhanh cho ứng dụng phức tạp',
    ],
  },
  {
    id: 8,
    name: 'PLC Mitsubishi Q06UDEHCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q06UDEH_n2hw1t.jpg',
    description: 'CPU mô-đun MELSEC-Q Universal, 60 k bước, I/O up to 4096/8192, tốc độ LD 9.5 ns, giao tiếp Ethernet, USB.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '60 k bước (~240 kB)' },
      { label: 'I/O tối đa', value: '4096 (local), 8192 (local+remote)' },
      { label: 'Tốc độ LD', value: '9.5 ns' },
      { label: 'Giao tiếp', value: 'Ethernet, USB' },
      { label: 'Nguồn đệm', value: 'Battery’ có buffer' },
    ],
    features: [
      'Bộ nhớ lớn, xử lý phức tạp dễ dàng',
      'I/O rất cao, thích hợp ứng dụng công nghiệp quy mô lớn',
      'Ethernet và USB tích hợp thuận tiện giao tiếp',
    ],
  },
  {
    id: 9,
    name: 'PLC Mitsubishi Q26UDEHCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q26UDEH_mgki52.jpg',
    description: 'CPU mô-đun MELSEC-Q Universal, 260 k bước, 4096/8192 I/O, tốc độ LD 9.5 ns, Ethernet, USB, buffer battery.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '260 k bước (~1 040 kB)' },
      { label: 'I/O tối đa', value: '4096 (local), 8192 (local+remote)' },
      { label: 'Tốc độ LD', value: '9.5 ns' },
      { label: 'Giao tiếp', value: 'Ethernet, USB' },
      { label: 'Buffer Battery', value: 'Yes' },
    ],
    features: [
      'Dung lượng cực lớn, xử lý chương trình siêu phức tạp',
      'Tỷ lệ I/O cao, phù hợp hệ thống rộng',
      'Giao tiếp linh hoạt và tốc độ xử lý nhanh',
      'Có buffer đảm bảo không mất chương trình khi mất nguồn',
    ],
  },
  {
    id: 10,
    name: 'PLC Mitsubishi R04ENCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R04ENCPU.jog_aeevua.webp',
    description: 'CPU iQ-R series standard, 40 k bước, hỗ trợ CC-Link IE, Ethernet, I/O tới 4096 điểm, nguồn 5 V DC từ rack.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '40 k bước (~160 kB)' },
      { label: 'I/O tối đa', value: '4096 (local)' },
      { label: 'Giao tiếp', value: 'Ethernet, CC-Link IE, USB' },
      { label: 'Nguồn cấp', value: '5 V DC (từ iQ-R PSU)' },
    ],
    features: [
      'Thuộc iQ-R thế hệ mới, mạng CC-Link IE tốc độ cao',
      'Dung lượng bộ nhớ đủ cho hệ thống phức tạp',
      'Giao tiếp đa dạng, dễ tích hợp vào hệ thống lớn',
    ],
  },
  {
    id: 101,
    name: 'Biến tần Mitsubishi FR-E720-0.75K',
    brand: 'Mitsubishi',
    type: 'Inverter (Biến tần)',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-0.75K_jrq3xf.jpg', // nếu bạn có link ảnh thì mình thêm được
    description: 'Biến tần FREQROL-E700 series của Mitsubishi, 3-phase 200–240 V, compact, hiệu suất cao cho động cơ 0.75 kW.',
    specifications: [
      { label: 'Đầu vào', value: '3-phase 200–240 V' },
      { label: 'Công suất đầu ra', value: '0.75 kW' },
      { label: 'Output capacity (kVA)', value: '2.0 kVA' },
      { label: 'Dòng định mức', value: '5 A' },
      { label: 'Chức năng điều khiển', value: 'Flux vector control, V/F, PWM cao tần, auto-tuning, PID, RS-485' },
      { label: 'Torque', value: '200 % tại 0.5 Hz (≤ 3.7 kW)' },
      { label: 'Môi trường hoạt động', value: '-10 °C đến +50 °C (non-freezing)' },
      { label: 'Bảo vệ quá tải', value: '150 % trong 60 s, 200 % trong 3 s' },
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ lắp đặt trong không gian hạn chế',
      'Khả năng tạo moment xoắn cao ở tốc độ thấp (200 % tại 0.5 Hz)',
      'Nhiều chế độ điều khiển linh hoạt (V/F, flux vector, PWM)',
      'Tự động hiệu chỉnh động cơ (auto tuning), PID, hỗ trợ RS-485',
    ],
    source: [
      'Output Capacity, rated current, functions of FR-E720-0.75K :contentReference[oaicite:0]{index=0}',
      'Torque, control types, environment specs :contentReference[oaicite:1]{index=1}'
    ]
  },
  {
    id: 102,
    name: 'Biến tần Mitsubishi FR-E720-1.5K',
    brand: 'Mitsubishi',
    type: 'Inverter (Biến tần)',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-1.5K_f4g2vt.png',
    description: 'Inverter FREQROL-E700 series compact, 3-phase 200–240 V, công suất 1.5 kW, hiệu suất cao.',
    specifications: [
      { label: 'Nguồn đầu vào', value: '3-phase 200–240 VAC' },
      { label: 'Công suất motor', value: '1.5 kW' },
      { label: 'Output capacity', value: '3.2 kVA' },
      { label: 'Dòng định mức đầu ra', value: '8 A' },
      { label: 'Tần số đầu ra', value: '0.2–400 Hz' },
      { label: 'Chống quá tải', value: '150% trong 60 s, 200% trong 3 s' },
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ lắp đặt',
      'Quá tải cao giúp khởi động mạnh mẽ',
      'Hỗ trợ Auto-tuning, nhiều chế độ điều khiển',
    ],
    source: [
      'Thông số đầu ra, công suất, dòng, tần số, quá tải của FR-E720-1.5K :contentReference[oaicite:0]{index=0}',
      'Nguồn đầu vào 200–240 V và nhiều chức năng khác :contentReference[oaicite:1]{index=1}'
    ]
  },
  {
    id: 103,
    name: 'Biến tần Mitsubishi FR-A840-0.4K',
    brand: 'Mitsubishi',
    type: 'Inverter (Biến tần)',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-0.4K_imrve8.png',
    description: 'Biến tần FREQROL-A800 series, 3-phase 400-500 V, công suất 0.4 kW, Modbus RTU, RS-232/422/485.',
    specifications: [
      { label: 'Nguồn đầu vào', value: '3-phase 380–500 VAC' },
      { label: 'Công suất motor', value: '0.4 kW' },
      { label: 'Output rated current', value: '1.5 A' },
      { label: 'Output capacity', value: '1.1 kVA' },
      { label: 'Giao tiếp', value: 'Modbus RTU, RS-232/422/485' },
      { label: 'Kích thước (WxDxH)', value: '150×140×260 mm' },
      { label: 'Trọng lượng', value: '≈ 4 kg' },
    ],
    features: [
      'Đa chuẩn kết nối, dễ tích hợp hệ thống mạng',
      'Thiết kế công nghiệp robust, IP20',
      'Phù hợp ứng dụng motor nhỏ, điều khiển chính xác'
    ],
    source: [
      'Thông số đầu vào, công suất, output current, kích thước, weight của FR-A840-0.4K :contentReference[oaicite:2]{index=2}'
    ]
  },
  {
    id: 104,
    name: 'Biến tần Mitsubishi FR-D720-0.4K',
    brand: 'Mitsubishi',
    type: 'Inverter (Biến tần)',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-D720-0.4K_iwfcro.jpg',
    description: 'Inverter FREQROL-D700 series, 3-phase 200–240 V, công suất 0.4 kW, hiệu năng cao, tích hợp bảo vệ an toàn theo chuẩn EU PLd/SIL2.',
    specifications: [
      { label: 'Nguồn đầu vào', value: '3-phase 200–240 VAC' },
      { label: 'Công suất motor', value: '0.4 kW' },
      { label: 'Dòng định mức đầu ra', value: '2.5 A' },
      { label: 'Output capacity', value: '≈ 1.0 kVA' },
      { label: 'Bảo vệ quá tải', value: '150 % trong 60 s, 200 % trong 0.5–3 s' },
      { label: 'An toàn chức năng', value: 'EN ISO 13849-1 Cat 3/PLd, EN 62061/IEC 61508 SIL2' },
      { label: 'Chức năng nổi bật', value: 'Magnetic-flux vector control, auto-tuning, mật khẩu bảo vệ tham số' },
    ],
    features: [
      'Thiết kế compact, dễ lắp đặt, tiết kiệm không gian',
      'Torque cao ở tần số thấp – phù hợp băng tải, máy giặt công nghiệp,…',
      'Cổng điều khiển an toàn tích hợp để tắt khẩn cấp hiệu quả',
      'Quản lý tham số qua mật khẩu tránh sai chỉnh không mong muốn',
    ],
    source: [
      'Thông số nguồn, công suất, dòng, an toàn chuẩn PLd/SIL2 và vector control/auto-tuning ([search0]turn0search0[/search0], [search4]turn0search4[/search4])',
      'Output capacity, overload, IP20 ([search2]turn0search2[/search2], [search10]turn0search10[/search10])'
    ]
  },
    {
      id: 105,
      name: 'Biến tần Mitsubishi FR-F820-0.75K',
      brand: 'Mitsubishi',
      type: 'Inverter (Biến tần)',
      price: 'Liên hệ',
      image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-F820-0.75K_i7zftz.jpg',
      description: 'Inverter FREQROL FR-F800 series, 3-phase 200–240 V AC, công suất định mức 0.75 kW, thiết kế phù hợp cho ứng dụng bơm/quạt với tính năng tiết kiệm năng lượng và kết nối linh hoạt.',
      specifications: [
        { label: 'Nguồn đầu vào', value: '3-phase 200–240 VAC' },
        { label: 'Công suất motor', value: '0.75 kW' },
        { label: 'Dòng định mức', value: '4.2 A (LD – light duty)' },
        { label: 'Output capacity', value: '≈ 1.6 kVA' },
        { label: 'Giao tiếp', value: 'RS-232 / RS-422 / RS-485' },
        { label: 'Tần số đầu ra', value: '0.2–590 Hz' },
        { label: 'Bảo vệ IP', value: 'IP20' },
        { label: 'Chiều cao', value: '≈ 260 mm' },
      ],
      features: [
        'Thiết kế tiết kiệm không gian, dễ lắp đặt trong tủ điều khiển',
        'Phù hợp cho ứng dụng quạt và bơm với điều khiển tần số chính xác',
        'Hỗ trợ truyền thông RS-232/422/485 dễ tích hợp vào hệ thống tự động hóa',
        'Hiệu suất cao, tuân thủ tiêu chuẩn CE/UL/CUL',
      ],
      source: [
        'Nguồn đầu vào, công suất, dòng định mức (LD), giao tiếp, IP, output capacity, kích thước ([PLC STORE BD](https://plcstorebd.com/product/fr-f820-0-75k-vfd-inverter-fr-f800-series-mitsubishi-electric/)) :contentReference[oaicite:0]{index=0}',
        'Xác nhận series FR-F800 và tần số đầu ra 0.2–590 Hz :contentReference[oaicite:1]{index=1}'
      ]
  },
  {
    id: 201,
    name: 'Servo Mitsubishi MR-J4-10A',
    brand: 'Mitsubishi',
    type: 'Servo Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-A_wyxi60.jpg',
    description: 'MELSERVO-J4 series, servo amplifier công suất 0.1 kW, giao diện general-purpose, có dynamic brake tích hợp.',
    specifications: [
      { label: 'Công suất motor', value: '0.1 kW' },
      { label: 'Nguồn cấp', value: '1-phase hoặc 3-phase AC 200–240 V' },
      { label: 'Dòng định mức', value: '≈ 1.1 A' },
      { label: 'Giao diện', value: 'General-purpose (pulse/analog input)' },
      { label: 'Kích thước (W×H×D)', value: '≈ ? (tài liệu chưa ghi chính xác)' },
      { label: 'Dynamic brake', value: 'Tích hợp' },
    ],
    features: [
      'Dễ tích hợp với hầu hết hệ thống nhờ giao diện phổ biến',
      'Tích hợp dynamic brake giúp dừng nhanh, tăng an toàn',
      'Thiết kế phù hợp đa ứng dụng công nghiệp nhỏ nhẹ',
    ],
    source: [
      'Công suất, giao diện, dynamic brake và dòng định mức từ MR-J4-10A NEX Instrument ([turn0search8]:contentReference[oaicite:0]{index=0})',
      'Thông tin general-purpose interface và tích hợp dynamic brake ([turn0search6]:contentReference[oaicite:1]{index=1})',
    ],
  },
  {
    id: 202,
    name: 'Servo Mitsubishi MR-J4-10B',
    brand: 'Mitsubishi',
    type: 'Servo Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-B_jpg_c7fw0h.jpg',
    description: 'MELSERVO-J4 series, servo amplifier 0.1 kW, giao tiếp SSCNET III/H, dynamic brake tích hợp, kích thước nhỏ gọn.',
    specifications: [
      { label: 'Công suất motor', value: '0.1 kW' },
      { label: 'Nguồn cấp', value: '1-phase hoặc 3-phase AC 200–240 V' },
      { label: 'Dòng định mức', value: '≈ 1.1 A' },
      { label: 'Giao tiếp', value: 'SSCNET III/H' },
      { label: 'Kích thước (W×H×D)', value: '≈ 40 × 168 × 170 mm' },
      { label: 'Weight', value: '≈ 0.8 kg' },
      { label: 'Dynamic brake', value: 'Tích hợp' },
    ],
    features: [
      'Tốc độ truyền dữ liệu nhanh qua SSCNET III/H, phù hợp đồng bộ multi-axis',
      'Kích thước nhỏ, dễ bố trí trong tủ điều khiển',
      'Dynamic brake tích hợp đảm bảo an toàn khi mất tín hiệu',
    ],
    source: [
      'Thông số kỹ thuật đầy đủ về dòng, công suất, kích thước, dynamic brake từ Mitsubishi Europe ([turn0search24]:contentReference[oaicite:2]{index=2})',
      'Bổ sung chi tiết kích thước và độ nặng từ VenusAutomation ([turn0search12]:contentReference[oaicite:3]{index=3})',
    ],
  },
  {
    id: 203,
    name: 'Servo Mitsubishi MR-J3-10B',
    brand: 'Mitsubishi',
    type: 'Servo Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J3-10B_mgfkxa.jpg',
    description: 'MELSERVO-J3 series, servo amplifier 0.1 kW, hỗ trợ Sinusoidal PWM, SSCNET III, công nghệ chống rung cao cấp.',
    specifications: [
      { label: 'Công suất motor', value: '0.1 kW' },
      { label: 'Nguồn cấp', value: '1-phase hoặc 3-phase AC 200–230 V' },
      { label: 'Control system', value: 'Sinusoidal PWM / current control' },
      { label: 'Giao tiếp', value: 'SSCNET III' },
      { label: 'Cooling', value: 'Self-cooling (IP00)' },
      { label: 'Các chức năng nổi bật', value: 'Auto-tuning, chống chế độ cộng hưởng, thiết lập dễ bằng phần mềm' },
    ],
    features: [
      'Độ chính xác cao nhờ Sinusoidal PWM và auto-tuning',
      'Khả năng chống cộng hưởng giúp chuyển động mượt và êm',
      'Giao tiếp tốc độ cao qua SSCNET III, dễ tích hợp vào hệ thống multi-axis',
    ],
    source: [
      'Thông số power, control system, SSCNET III từ NexInstrument ([turn0search5]:contentReference[oaicite:4]{index=4})',
      'Mô tả chi tiết về tính năng nâng cao và auto-tuning từ catalog MR-J3 PDF ([turn0search13]:contentReference[oaicite:5]{index=5})',
    ],
  },
  {
    id: 301,
    name: 'Input Module FX2N-16EX-ES/UL',
    brand: 'Mitsubishi',
    type: 'PLC Module – Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EX-ES-UL_hz7tbh.webp',
    description: 'Mô-đun mở rộng đầu vào kỹ thuật số FX2N, 16 điểm, 24 V DC, tương thích với FX2N, FX1N, FX3U…',
    specifications: [
      { label: 'Số điểm đầu vào', value: '16 DI (24 V DC)' },
      { label: 'Kiểu kết nối', value: 'cọc vặn (screw-clamp)' },
      { label: 'Chọn loại input', value: 'Sink/Source (PNP/NPN)' },
      { label: 'Nguồn cung cấp', value: 'PLC internal power' },
      { label: 'Trọng lượng', value: '≈ 0.3 kg' },
      { label: 'Kích thước (L×W×H)', value: '≈ 90 × 40 × 87 mm' },
      { label: 'Phản hồi đầu vào', value: '≈ 10 ms' },
    ],
    features: [
      'Mở rộng dễ dàng cho các dòng PLC FX cũ và mới',
      'Tùy chọn sink/source linh hoạt, phù hợp nhiều cảm biến',
      'Thiết kế nhỏ gọn, dễ gắn thêm trên thanh DIN',
      'Tín hiệu đầu vào có đèn LED báo hiệu rõ ràng',
    ],
    source: [
      'Thông số kỹ thuật đầu vào, số DI, sink/source, phản hồi thời gian, trọng lượng, kích thước từ trang chính hãng Mitsubishi :contentReference[oaicite:0]{index=0}',
      'Chi tiết 16 điểm đầu vào, screw-clamp term, 24 V DC, kích thước từ RS Components :contentReference[oaicite:1]{index=1}',
    ],
  },
  {
    id: 302,
    name: 'Output Module FX2N-16EYR-ES/UL',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EYR-ES-UL_s2biev.jpg',
    description: 'Mô-đun mở rộng đầu ra relay FX2N, 16 điểm (NO), tương thích dòng FX2N, FX3U…',
    specifications: [
      { label: 'Số điểm đầu ra', value: '16 relay NO' },
      { label: 'Tải tối đa', value: '2 A / 240 V AC' },
      { label: 'Nguồn cung cấp', value: 'Relay, từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.26 kg' },
      { label: 'Kiểu nối', value: 'Screw-clamp terminal' },
    ],
    features: [
      'Đầu ra relay mạnh, chịu tải cao',
      'Lắp thêm dễ dàng vào dãy PLC FX2N',
      'Bao gồm tiêu chuẩn UL/CE',
    ],
    source: [
      'Spec kỹ thuật từ Mitsubishi shop1.us và MEE e-shop :contentReference[oaicite:0]{index=0}',
    ],
  },
  {
    id: 303,
    name: 'Analog IN Module FX2N-4AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176533/FX2N-4AD_u4cjtw.jpg',
    description: 'Mô-đun analog input FX2N, 4 kênh, hỗ trợ tín hiệu ±10 V, ±20 mA / 4–20 mA.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Dải tín hiệu', value: '-10 đến +10 V, -20 đến +20 mA, 4–20 mA' },
      { label: 'Độ phân giải (voltage)', value: '5 mV (~11-bit)' },
      { label: 'Nguồn cấp', value: '5 V/30 mA hoặc 24 V/55 mA từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.30 kg' },
    ],
    features: [
      'Hỗ trợ nhiều dải tín hiệu, linh hoạt cho cảm biến analog',
      'Độ phân giải cao, đo chính xác',
    ],
    source: [
      'Spec chi tiết nibet trên Nex Instrument :contentReference[oaicite:1]{index=1}',
      'Thông tin bổ sung từ datasheet rs-online :contentReference[oaicite:2]{index=2}',
    ],
  },
  {
    id: 304,
    name: 'Analog IN Module FX2N-2AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2AD_kx58ib.webp',
    description: 'Mô-đun analog input FX2N, 2 kênh, hỗ trợ tín hiệu 0–10 V / 0–5 V / 4–20 mA, 12-bit.',
    specifications: [
      { label: 'Số kênh analog', value: '2 kênh' },
      { label: 'Dải tín hiệu', value: '0–10 V, 0–5 V, 4–20 mA' },
      { label: 'Độ phân giải', value: '12-bit' },
      { label: 'Tốc độ chuyển đổi', value: '≈ 3.6 µs/kênh' },
      { label: 'Nguồn cấp', value: '5 V/20 mA hoặc 24 V/50 mA từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.2 kg' },
    ],
    features: [
      'Đa dạng tín hiệu đầu vào, dễ tích hợp',
      'Chuyển đổi nhanh, phù hợp cho ứng dụng đo thời gian thực',
    ],
    source: [
      'Specs từ DoSupply và Nex Instrument :contentReference[oaicite:3]{index=3}',
      'Thông số bổ sung từ Valinonline :contentReference[oaicite:4]{index=4}',
    ],
  },
  {
    id: 305,
    name: 'Analog IN Module FX3U-4AD-ADP',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input Adapter',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-4AD-ADP_nml1uq.jpg',
    description: 'Bộ mở rộng analog input FX3U, 4 kênh, bổ sung tín hiệu analog cho dòng FX3U.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Loại tín hiệu', value: '0-10 V / 4–20 mA (12-bit)' },
      { label: 'Ứng dụng', value: 'Adapter cho PLC FX3U' },
      { label: 'Chịu rung/shock', value: 'Shock: 147 m/s²' },
    ],
    features: [
      'Tăng khả năng đọc analog cho PLC FX3U',
      'Chịu độ rung cao, bền cho môi trường công nghiệp',
    ],
    source: [
      'Info module từ Octopart/manual :contentReference[oaicite:5]{index=5}',
    ],
  },
  {id: 306,
    name: 'Analog IN Module FX5-4AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4AD_got1zi.jpg',
    description: 'Mô-đun analog input FX5 series, 4 kênh, chuyển tín hiệu analog sang số, cách ly quang photocoupler.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Nguồn cấp', value: '24 V DC / 5 V DC' },
      { label: 'Tốc độ chuyển đổi', value: '≈ 80 µs/kênh' },
      { label: 'Cách ly', value: 'Photocoupler giữa input và PLC' },
      { label: 'I/O points chiếm', value: '8 points' },
      { label: 'Kích thước (WxHxD)', value: '≈ 17.6×106×89.1 mm' },
      { label: 'Trọng lượng', value: '≈ 0.2 kg' },
    ],
    features: [
      'Độ chính xác cao, cách ly tốt, phù hợp môi trường công nghiệp',
      'Tín hiệu analog dễ đọc qua PLC iQ-F',
    ],
    source: [
      'Chi tiết kỹ thuật từ Nex Instrument và MEE site :contentReference[oaicite:6]{index=6}',
    ],
  },
  {
    id: 307,
    name: 'Analog IN Module FX3U-4AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3U-4AD_zcwrpo.jpg',
    description: 'Mô-đun analog input FX3U, 4 kênh, hỗ trợ ±10 V và ±20 mA / 4–20 mA, 16-bit độ phân giải.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Dải tín hiệu', value: '±10 V, ±20 mA, 4–20 mA' },
      { label: 'Độ chính xác', value: '±0.3% at 25 °C; ±0.5% (0–55 °C)' },
      { label: 'Số điểm I/O chiếm', value: '8 points' },
      { label: 'Kích thước (WxHxD)', value: '55×90×87 mm' },
      { label: 'Trọng lượng', value: '≈ 0.2 kg' },
    ],
    features: [
      'Độ chính xác ổn định, phù hợp điều khiển analog cảm biến',
      'Các channel có thể chọn loại tín hiệu độc lập',
    ],
    source: [
      'Thông số chi tiết từ Nex Instrument và MEE website :contentReference[oaicite:7]{index=7}',
    ],
  },
  {
    id: 308,
    name: 'Analog OUT Module FX2N-2DA',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2DA_j87lpm.jpg',
    description: 'Mô-đun analog output FX2N, 2 kênh, chuyển giá trị số 12-bit thành tín hiệu analog (voltage/current).',
    specifications: [
      { label: 'Số kênh analog output', value: '2 kênh' },
      { label: 'Tín hiệu đầu ra', value: '0–10 V, 0–5 V, hoặc 4–20 mA (có thể chọn dây nối)' },
      { label: 'Độ phân giải', value: '12-bit' },
      { label: 'I/O points chiếm', value: '8 points' },
      { label: 'Cách ly', value: 'Giữa analog & digital circuits' },
    ],
    features: [
      'Phù hợp xuất analog cho bộ điều khiển tốc độ, van tương tự',
      'Lựa chọn dễ dàng loại tín hiệu output, linh hoạt thiết kế',
    ],
    source: [
      'Tài liệu user guide và datasheet :contentReference[oaicite:8]{index=8}',
    ],
  },
  {
    id: 309,
    name: 'Relay Output Module FX5-16EYR/ES',
    brand: 'Mitsubishi',
    type: 'PLC Module – Relay Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-16EYR-ES_nqxccb.webp',
    description: 'Mô-đun output relay FX5 series, 16 điểm, relay NO, tương thích FX5U/FX5UC.',
    specifications: [
      { label: 'Số điểm relay', value: '16 DO relay' },
      { label: 'Nguồn ra max', value: '30 V DC hoặc 240 V AC' },
      { label: 'Nguồn cấp module', value: '5 V DC / 24 V DC từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.25 kg' },
      { label: 'Kiểu kết nối', value: 'Screw-clamp' },
    ],
    features: [
      'Relay chịu tải tốt, dễ điều khiển thiết bị công suất nhỏ',
      'Thiết kế cho dòng iQ-F FX5, dễ mở rộng hệ thống',
    ],
    source: [
      'Specs module từ MEE site & factsheet :contentReference[oaicite:9]{index=9}',
    ],
  },
  {
    id: 310,
    name: 'Input Module QX41',
    brand: 'Mitsubishi',
    type: 'PLC Module – Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX41_hitrgh.jpg',
    description: 'MELSEC-Q series digital input module, 32 điểm, 24 V DC (sink type), dùng photocoupler cách ly.',
    specifications: [
      { label: 'Số điểm đầu vào', value: '32 DI' },
      { label: 'Điện áp đầu vào định mức', value: '24 V DC' },
      { label: 'Dòng đầu vào định mức', value: '≈ 4 mA' },
      { label: 'Cách ly', value: 'Photocoupler' },
      { label: 'Response time (OFF→ON / ON→OFF)', value: 'tùy chọn từ 1 ms đến ≤70 ms' },
      { label: 'Giao tiếp', value: '40-pin connector' },
      { label: 'Kích thước (HxWxD)', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.15 kg' },
      { label: 'Bảo vệ', value: 'IP2X' },
    ],
    features: [
      'Tích hợp 32 điểm input, thích hợp mở rộng cho hệ Q-series',
      'Cách ly qua photocoupler tăng độ bền tín hiệu và giảm nhiễu',
      'LED báo tín hiệu dễ theo dõi trạng thái input',
    ],
    source: [
      'Spec chung từ trang sản phẩm Mitsubishi Europe ([turn0search6]([QX41 specs]))',
      'Chi tiết kích thước, trọng lượng, dòng từ Nex Instrument ([turn0search18])',
    ],
  },
  {
    id: 311,
    name: 'Output Module QY42P',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY42P_n6j07e.jpg',
    description: 'MELSEC-Q series transistor output module dạng sink, 64 điểm, 12–24 V DC.',
    specifications: [
      { label: 'Số điểm đầu ra', value: '64 transistor outputs (sink type)' },
      { label: 'Điện áp tải', value: '12–24 V DC' },
      { label: 'Dòng per output / common', value: '0.1 A/point, 2 A/common' },
      { label: 'Kết nối', value: 'Screw terminal / 40-pin connector' },
      { label: 'Kích thước (HxWxD)', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.17 kg' },
    ],
    features: [
      'Khối lượng output cao, phù hợp các thiết bị tải nhỏ đến vừa',
      'Dễ lắp đặt với terminal screw chắc chắn',
      'Hỗ trợ cấu hình sink type phổ biến cho hệ Q-series',
    ],
    source: [
      'Spec cơ bản từ Mitsubishi Europe ([turn0search1])',
      'Chi tiết kích thước, dòng, trọng lượng từ Plastlist/NexInstrument ([turn0search43] & [turn0search19])',
    ],
  },
  {
    id: 312,
    name: 'Output Module QY10',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY10_kegsoo.jpg',
    description: 'MELSEC-Q series relay output module, 16 điểm, 24 V DC / 240 V AC, 2 A per point.',
    specifications: [
      { label: 'Số điểm đầu ra', value: '16 relay outputs' },
      { label: 'Điện áp tải', value: '24 V DC hoặc 240 V AC' },
      { label: 'Dòng tải tối đa', value: '2 A/point' },
      { label: 'Kích thước (HxWxD)', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.22 kg' },
      { label: 'Kết nối', value: 'Screw terminal' },
    ],
    features: [
      'Relay chất lượng cao, chịu tải linh hoạt trong môi trường đa tải',
      'Thiết kế module tiêu chuẩn cho hệ Q-series',
    ],
    source: [
      'Spec từ Plastlist ([turn0search14], [turn0search38])',
      'Chi tiết kích thước & trọng lượng thêm từ VenusAutomation ([turn0search26])',
    ],
  },
  {
    id: 313,
    name: 'Analog Input Module Q64AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64AD_m3nu7g.jpg',
    description: 'MELSEC-Q series analog input module, 4 channels, có thể nhận cả tín hiệu voltage và current.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Dải đầu vào voltage', value: '-10…+10 V, 0…10 V, 0…5 V, 1…5 V' },
      { label: 'Dải đầu vào current', value: '0…20 mA, 4…20 mA' },
      { label: 'Độ phân giải', value: 'Normal / High resolution (up to ±16383)' },
      { label: 'Sai số', value: '≤ ±0.1 % tại 25 °C' },
      { label: 'Tốc độ A/D', value: '≈ 80 µs/channel' },
      { label: 'Cách ly', value: 'Photocoupler giữa input và PLC' },
      { label: 'Kích thước', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.18 kg' },
    ],
    features: [
      'Hỗ trợ nhiều loại tín hiệu analog, linh hoạt cho hệ Q-series',
      'Cách ly quang tăng độ ổn định và hạn chế nhiễu',
    ],
    source: [
      'Chi tiết spec đầy đủ từ trang Mitsubishi ([turn0search3])',
      'Data từ NexInstrument bổ sung số lượng I/O và cấu trúc terminal ([turn0search33])',
    ],
  },
  {
    id: 314,
    name: 'Analog Output Module Q64DA',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64DA_whjyiz.jpg',
    description: 'MELSEC-Q series D/A converter module, 4 channels, hỗ trợ voltage và current output.',
    specifications: [
      { label: 'Số kênh analog output', value: '4 kênh' },
      { label: 'Dải điện áp output', value: '-10…+10 V DC' },
      { label: 'Dải current output', value: '0…20 mA DC' },
      { label: 'Độ phân giải', value: 'High resolution up to ±12287' },
      { label: 'Tốc độ D/A', value: '≈ 80 µs/channel' },
      { label: 'Cách ly', value: 'Photocoupler giữa output và PLC' },
      { label: 'I/O points chiếm', value: '16 points' },
      { label: 'Kích thước / Trọng lượng', value: '≈ 98×27.4×90 mm, 0.19 kg' },
    ],
    features: [
      'Cho phép xuất tín hiệu analog ra actuators, valves, drives...',
      'Độ phân giải cao, tốc độ đáp ứng nhanh, phù hợp điều khiển chính xác.',
    ],
    source: [
      'Spec ngõ ra analog từ trang Mitsubishi ([turn0search4])',
      'Chi tiết khối lượng & kích thước từ NexInstrument / LanenElectric ([turn0search16], [turn0search28])',
    ],
  },
  {
    id: 315,
    name: 'Input Module RY10R2-TS',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY10R2-TS_cblj8a.jpg',
    description: 'iQ-R series relay output module, 16 points, 24 V DC / 240 V AC, 2 A per point, sử dụng spring-clamp terminals.',
    specifications: [
      { label: 'Số điểm output', value: '16 relay outputs' },
      { label: 'Điện áp tải', value: '24 V DC hoặc 240 V AC' },
      { label: 'Dòng tải tối đa', value: '2 A/point' },
      { label: 'Kết nối', value: 'Spring-clamp terminal block' },
      { label: 'Kích thước', value: '≈ 106×27.8×129 mm' },
      { label: 'Trọng lượng', value: '≈ 0.19 kg' },
      { label: 'I/O points chiếm', value: '16 points' },
    ],
    features: [
      'Thiết kế cho hệ iQ-R, relay chịu tải công nghiệp mạnh',
      'Kết nối spring-clamp giúp lắp đặt nhanh và chắc chắn',
    ],
    source: [
      'Spec từ Mitsubishi Europe ([turn0search5])',
      'Chi tiết kích thước, trọng lượng và dòng tiêu thụ từ Misumi / Yunus Computer ([turn0search29])',
    ],
  },
  // HMI
  {
    id: 401,
    name: 'HMI Proface GP-4301T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301T_ovyvu4.jpg',
    description: 'HMI màn hình cảm ứng 5.7 inch, QVGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '5.7 inch TFT LCD' },
      { label: 'Độ phân giải', value: '320 x 240 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Mặt trước chống bụi nước',
      'Hỗ trợ nhiều giao thức kết nối PLC',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4301TAD'],
  },
  {
    id: 402,
    name: 'HMI Proface GP-4301TM',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301TM_hrqrpf.jpg',
    description: 'HMI màn hình cảm ứng 5.7 inch, QVGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '5.7 inch TFT LCD' },
      { label: 'Độ phân giải', value: '320 x 240 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Mặt trước chống bụi nước',
      'Hỗ trợ nhiều giao thức kết nối PLC',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGM4301TAD'],
  },
  {
    id: 403,
    name: 'HMI Proface GP-4401T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4401T_wcxbki.jpg',
    description: 'HMI màn hình cảm ứng 7.5 inch, VGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '7.5 inch TFT LCD' },
      { label: 'Độ phân giải', value: '640 x 480 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Mặt trước chống bụi nước',
      'Hỗ trợ nhiều giao thức kết nối PLC',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4401TAD'],
  },
  {
    id: 404,
    name: 'HMI Proface GP-4501T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4501T_dbkzyx.jpg',
    description: 'HMI màn hình cảm ứng 10.4 inch, VGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '10.4 inch TFT LCD' },
      { label: 'Độ phân giải', value: '640 x 480 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Mặt trước chống bụi nước',
      'Hỗ trợ nhiều giao thức kết nối PLC',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4501TAD'],
  },
  {
    id: 405,
    name: 'HMI Proface GP-4601T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4601T_qbofqz.jpg',
    description: 'HMI màn hình cảm ứng 12.1 inch, SVGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '12.1 inch TFT LCD' },
      { label: 'Độ phân giải', value: '800 x 600 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '32 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Mặt trước chống bụi nước',
      'Hỗ trợ nhiều giao thức kết nối PLC',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4601TAD'],
  },

  // Cảm biến Keyence
  {
    id:501,
    name: 'Cảm biến Keyence FS-N40',
    brand: 'Keyence',
    type: 'Sensor – Fiber Optic',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FS-N40_nz2zl6.jpg',
    description: 'Cảm biến quang học sợi quang, phản hồi nhanh, DC 12–24V.',
    specifications: [
      { label: 'Phạm vi phát hiện', value: 'Tối đa 100 m' },
      { label: 'Thời gian phản hồi', value: '23 µs – 500 µs' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN, PNP' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Phản hồi cực nhanh',
      'Độ chính xác cao trong công nghiệp',
    ],
    source: ['https://www.keyence.com/products/sensor/fiber-optic/fs-n40/specs/'],
  },
  {
    id: 502,
    name: 'Cảm biến Keyence FS-V30',
    brand: 'Keyence',
    type: 'Sensor – Fiber Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/FS-V30_hqj3cc.jpg',
    description: 'Bộ khuếch đại sợi quang, nhiều chế độ hoạt động, DC 12–24V.',
    specifications: [
      { label: 'Phạm vi phát hiện', value: 'Tối đa 10 m' },
      { label: 'Thời gian phản hồi', value: '193 µs – 16.7 ms' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Dễ lắp đặt',
      'Độ bền cao, chính xác',
    ],
    source: ['https://www.keyence.ca/products/sensor/fiber-optic/fs-v30/models/'],
  },
  {
    id: 503,
    name: 'Cảm biến Keyence LR-ZB100CP',
    brand: 'Keyence',
    type: 'Sensor – Laser',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/LR-ZB100CP_w1r3it.jpg',
    description: 'Cảm biến laser CMOS tích hợp, PNP output, DC 12–24V.',
    specifications: [
      { label: 'Phạm vi phát hiện', value: '100 mm' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'PNP' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Độ chính xác cao',
      'Phát hiện vật thể nhỏ',
    ],
    source: ['https://www.keyence.com/products/sensor/photoelectric/lr-z/models/'],
  },
  {
    id: 504,
    name: 'Omron E3Z-D61',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Diffuse',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3Z-D61_ikgmfn.jpg',
    description: 'Cảm biến quang khuếch tán, phát hiện vật thể gần, DC 12–24V.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Khuếch tán' },
      { label: 'Khoảng cách cảm biến', value: '100 mm' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Chống nước và bụi',
      'Chế độ Light-ON/Dark-ON',
      'Phản hồi nhanh',
    ],
    source: ['https://www.omron-ap.com/products/family/1231/'],
  },
  {
    id: 505,
    name: 'Omron E3Z-R61',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Retroreflective',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-R61_igscnb.webp',
    description: 'Cảm biến phản xạ với nền, DC 12–24V, NPN output.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Phản xạ' },
      { label: 'Khoảng cách cảm biến', value: '100 mm – 4 m (với phản xạ tấm gương)' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Phát hiện vật có nền sáng/tối khác nhau',
      'Phản hồi nhanh và ổn định',
    ],
    source: ['https://www.omron-ap.com/products/family/1232/'],
  },
  {
    id: 506,
    name: 'Omron E3Z-T61',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Through-beam',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-T61_cdcy3k.webp',
    description: 'Cảm biến xuyên qua, DC 12–24V, PNP/NPN output.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Xuyên qua' },
      { label: 'Khoảng cách cảm biến', value: '0–2 m' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'PNP/NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Phát hiện vật chắn trực tiếp giữa emitter và receiver',
      'Phản hồi nhanh, ổn định',
    ],
    source: ['https://www.omron-ap.com/products/family/1233/'],
  },
  {
    id: 507,
    name: 'Omron E3Z-D82',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Diffuse',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-D82_plxva5.avif',
    description: 'Cảm biến khuếch tán, DC 12–24V, PNP/NPN output.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Khuếch tán' },
      { label: 'Khoảng cách cảm biến', value: '0–2 m' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'PNP/NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Độ ổn định cao trong công nghiệp',
      'Phản hồi nhanh và chính xác',
    ],
    source: ['https://www.omron-ap.com/products/family/1234/'],
  },
  {
    id: 508,
    name: 'Omron E2B-S08KS02-WP-C1',
    brand: 'Omron',
    type: 'Proximity Sensor – Inductive',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E2B-S08KS02-WP-C1_wbo1lp.webp',
    description: 'Cảm biến tiệm cận cảm ứng kim loại, DC 10–30V, NPN output.',
    specifications: [
      { label: 'Khoảng cách cảm biến', value: '8 mm' },
      { label: 'Nguồn cấp', value: 'DC 10–30V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +70°C' },
      { label: 'Vật liệu vỏ', value: 'Thép không gỉ' },
    ],
    features: [
      'Chống bụi và nước',
      'Kích thước nhỏ gọn',
      'Độ bền cao',
    ],
    source: ['https://www.omron-ap.com/products/family/1235/'],
  },
  {
    id: 509,
    name: 'Omron E2E-X10MY1',
    brand: 'Omron',
    type: 'Proximity Sensor – Inductive',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2E-X10MY1_x2mozj.jpg',
    description: 'Cảm biến tiệm cận, DC 10–30V, NPN output, khoảng cách 10mm.',
    specifications: [
      { label: 'Khoảng cách cảm biến', value: '10 mm' },
      { label: 'Nguồn cấp', value: 'DC 10–30V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +70°C' },
      { label: 'Vật liệu vỏ', value: 'Thép không gỉ' },
    ],
    features: [
      'Chống bụi và nước',
      'Kích thước nhỏ gọn',
      'Độ bền cao',
    ],
    source: ['https://www.omron-ap.com/products/family/1236/'],
  },
  {
    id: 510,
    name: 'Omron E2E-X14MD1',
    brand: 'Omron',
    type: 'Proximity Sensor – Inductive',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E2E-X14MD1_w7wrsx.webp',
    description: 'Cảm biến tiệm cận, DC 10–30V, NPN output, khoảng cách 14mm.',
    specifications: [
      { label: 'Khoảng cách cảm biến', value: '14 mm' },
      { label: 'Nguồn cấp', value: 'DC 10–30V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +70°C' },
      { label: 'Vật liệu vỏ', value: 'Thép không gỉ' },
    ],
    features: [
      'Chống bụi và nước',
      'Kích thước nhỏ gọn',
      'Độ bền cao',
    ],
    source: ['https://www.omron-ap.com/products/family/1237/'],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === Number(id));

  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  if (!product) return <h2 style={{ padding: 20 }}>Không tìm thấy sản phẩm</h2>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) {
      alert('Vui lòng nhập tên và nhận xét.');
      return;
    }
    setReviews(prev => [
      ...prev,
      {
        id: Date.now(),
        ...reviewForm,
        rating: Number(reviewForm.rating),
      }
    ]);
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  // Lấy danh sách sản phẩm tương tự (cùng loại, khác id)
  const similarProducts = allProducts.filter(p => p.type === product.type && p.id !== product.id);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: 100,
          left: 10,
          backgroundColor: '#007bff',       // màu xanh nổi bật
          color: 'white',
          fontWeight: '600',
          fontSize: '16px',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex: 9999,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#0056b3';  // màu xanh đậm hơn khi hover
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 86, 179, 0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#007bff';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 123, 255, 0.3)';
        }}
      >
        ⇦
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ flex: '1 1 400px', maxWidth: 400, borderRadius: 12, boxShadow: '0 6px 15px rgba(0,0,0,0.15)', objectFit: 'cover' }}
        />

        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ marginBottom: 15 }}>{product.name}</h1>
          <p><strong>Hãng:</strong> {product.brand}</p>
          <p><strong>Loại:</strong> {product.type}</p>
          <p><strong>Giá:</strong> {product.price}</p>
          <p style={{ lineHeight: 1.6, fontSize: 15, color: '#555', marginTop: 15 }}>{product.description}</p>

          <h3 style={{ marginTop: 30, marginBottom: 10 }}>Thông số kỹ thuật</h3>
          <ul>
            {product.specifications.map((spec, idx) => (
              <li key={idx}><strong>{spec.label}:</strong> {spec.value}</li>
            ))}
          </ul>

          <h3 style={{ marginTop: 30, marginBottom: 10 }}>Tính năng nổi bật</h3>
          <ul>
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <button
            style={{
              marginTop: 30,
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(40,167,69,0.4)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#28a745'}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      {/* Phần đánh giá & nhận xét */}
      <div style={{ marginTop: 50, border: '1px solid #ddd', padding: 20 }}>
        <h2>Đánh giá & Nhận xét</h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
          <label>
            Tên: <br />
            <input
              type="text"
              name="name"
              value={reviewForm.name}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>

          <label>
            Đánh giá: <br />
            <select
              name="rating"
              value={reviewForm.rating}
              onChange={handleInputChange}
              style={{ padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #ccc' }}
            >
              {[5,4,3,2,1].map(n => (
                <option key={n} value={n}>{n} sao</option>
              ))}
            </select>
          </label>

          <label>
            Nhận xét: <br />
            <textarea
              name="comment"
              value={reviewForm.comment}
              onChange={handleInputChange}
              rows={4}
              required
              style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>

          <button type="submit" style={{
            marginTop: 10,
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 16,
          }}>
            Gửi đánh giá
          </button>
        </form>

        {reviews.length === 0 ? (
          <p>Chưa có đánh giá nào.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reviews.map(r => (
              <li key={r.id} style={{ marginBottom: 20, borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
                <strong>{r.name}</strong> - {r.rating} sao
                <p style={{ marginTop: 6 }}>{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sản phẩm tương tự */}
      {similarProducts.length > 0 && (
        <div style={{ marginTop: 50 }}>
          <h2>Sản phẩm tương tự</h2>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {similarProducts.map(sp => (
              <Link
                to={`/product/${sp.id}`}
                key={sp.id}
                style={{
                  width: 180,
                  textDecoration: 'none',
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
                <div style={{ padding: '10px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: 14 }}>{sp.name}</h4>
                  <p style={{ color: '#e63946', fontWeight: 'bold', fontSize: 13 }}>{sp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
