(function() {var implementors = {};
implementors["bigdecimal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"bigdecimal/struct.BigDecimal.html\" title=\"struct bigdecimal::BigDecimal\">BigDecimal</a>&gt; for <a class=\"struct\" href=\"bigdecimal/struct.BigDecimal.html\" title=\"struct bigdecimal::BigDecimal\">BigDecimal</a>","synthetic":false,"types":["bigdecimal::BigDecimal"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"bigdecimal/struct.BigDecimal.html\" title=\"struct bigdecimal::BigDecimal\">BigDecimal</a>&gt; for <a class=\"struct\" href=\"bigdecimal/struct.BigDecimal.html\" title=\"struct bigdecimal::BigDecimal\">BigDecimal</a>","synthetic":false,"types":["bigdecimal::BigDecimal"]}];
implementors["bitvec"] = [{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"bitvec/index/struct.BitSel.html\" title=\"struct bitvec::index::BitSel\">BitSel</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitMask"]}];
implementors["im"] = [{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"im/ordmap/struct.OrdMap.html\" title=\"struct im::ordmap::OrdMap\">OrdMap</a>&lt;K, V&gt;&gt; for <a class=\"struct\" href=\"im/ordmap/struct.OrdMap.html\" title=\"struct im::ordmap::OrdMap\">OrdMap</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["im::ord::map::OrdMap"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"im/ordset/struct.OrdSet.html\" title=\"struct im::ordset::OrdSet\">OrdSet</a>&lt;A&gt;&gt; for <a class=\"struct\" href=\"im/ordset/struct.OrdSet.html\" title=\"struct im::ordset::OrdSet\">OrdSet</a>&lt;A&gt;","synthetic":false,"types":["im::ord::set::OrdSet"]},{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"im/hashmap/struct.HashMap.html\" title=\"struct im::hashmap::HashMap\">HashMap</a>&lt;K, V, S&gt;&gt; for <a class=\"struct\" href=\"im/hashmap/struct.HashMap.html\" title=\"struct im::hashmap::HashMap\">HashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["im::hash::map::HashMap"]},{"text":"impl&lt;A, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"im/hashset/struct.HashSet.html\" title=\"struct im::hashset::HashSet\">HashSet</a>&lt;A, S&gt;&gt; for <a class=\"struct\" href=\"im/hashset/struct.HashSet.html\" title=\"struct im::hashset::HashSet\">HashSet</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["im::hash::set::HashSet"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"enum\" href=\"im/enum.Vector.html\" title=\"enum im::Vector\">Vector</a>&lt;A&gt;&gt; for <a class=\"enum\" href=\"im/enum.Vector.html\" title=\"enum im::Vector\">Vector</a>&lt;A&gt;","synthetic":false,"types":["im::vector::Vector"]}];
implementors["num_bigint"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt;,&nbsp;</span>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt;,&nbsp;</span>","synthetic":false,"types":["num_bigint::biguint::BigUint"]}];
implementors["ordered_float"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"num_traits/float/trait.FloatCore.html\" title=\"trait num_traits::float::FloatCore\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;","synthetic":false,"types":["ordered_float::OrderedFloat"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"num_traits/float/trait.FloatCore.html\" title=\"trait num_traits::float::FloatCore\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;","synthetic":false,"types":["ordered_float::OrderedFloat"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"num_traits/float/trait.FloatCore.html\" title=\"trait num_traits::float::FloatCore\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;","synthetic":false,"types":["ordered_float::NotNan"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"num_traits/float/trait.FloatCore.html\" title=\"trait num_traits::float::FloatCore\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;","synthetic":false,"types":["ordered_float::NotNan"]}];
implementors["rust_decimal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"rust_decimal/prelude/struct.Decimal.html\" title=\"struct rust_decimal::prelude::Decimal\">Decimal</a>&gt; for <a class=\"struct\" href=\"rust_decimal/prelude/struct.Decimal.html\" title=\"struct rust_decimal::prelude::Decimal\">Decimal</a>","synthetic":false,"types":["rust_decimal::decimal::Decimal"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"rust_decimal/prelude/struct.Decimal.html\" title=\"struct rust_decimal::prelude::Decimal\">Decimal</a>&gt; for <a class=\"struct\" href=\"rust_decimal/prelude/struct.Decimal.html\" title=\"struct rust_decimal::prelude::Decimal\">Decimal</a>","synthetic":false,"types":["rust_decimal::decimal::Decimal"]}];
implementors["time"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>","synthetic":false,"types":["time::duration::Duration"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>","synthetic":false,"types":["time::duration::Duration"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()